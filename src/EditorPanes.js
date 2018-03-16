import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow_night';
import {lenientToJS, lenientToLenient, jsToLenient} from './transpile';
import {initialDemo} from './initialDemo';
import examples from './examples';
import * as rc from 'recompose';

class EditorPanes extends React.Component {
  state = {
    lenient: '',
    js: '',
    expanded: false,
    example: null,
    inDemoMode: true,
  };

  onLenientChange = (value, range) => {
    this.setStateWithDemoMode(range, value, value => ({lenient: value}));
    lenientToJS(value, this.options()).then(({code, error}) => {
      this.setState(({js}) => ({js: this.codeUpdate(code, error, js)}));
    });
  };

  onJSChange = (value, range) => {
    this.setStateWithDemoMode(range, value, value => ({js: value}));
    jsToLenient(value, this.options()).then(({code, error}) => {
      this.setState(({lenient}) => ({
        lenient: this.codeUpdate(code, error, lenient),
      }));
    });
  };

  codeUpdate(code, error, prevCode) {
    return ex(this.state.inDemoMode ? code : ex(code, error), prevCode);
  }

  setStateWithDemoMode(range, value, setter) {
    this.setState(state => {
      const wasInDemoMode = state.inDemoMode;
      const inDemoMode = wasInDemoMode && range == null;
      return {inDemoMode, ...setter(wasInDemoMode && !inDemoMode ? '' : value)};
    });
  }

  options() {
    return {
      printWidth: !this.state.expanded
        ? 57
        : Math.max(
            57,
            Math.min(80, Math.floor((window.innerWidth - 40) / 17.6)),
          ),
    };
  }

  expand = () => {
    this.setState({expanded: !this.state.expanded});
  };

  editorProps() {
    const {expanded} = this.state;
    // React-ace doesn't accept numbers
    return {
      height: (expanded ? window.innerHeight - 152 : 346) + 'px',
      width: (expanded ? (window.innerWidth - 120) / 2 : 489) + 'px',
    };
  }

  load = example => {
    this.setState({example});
    this.onJSChange(examples[example]);
    if (this.editorLenient != null) {
      for (const editor of [this.editorLenient, this.editorJS]) {
        editor.clearSelection();
        editor.moveCursorTo(0, 0);
        editor.scrollToRow(0);
      }
    }
  };

  componentDidMount() {
    initialDemo({
      setLenient: this.inDemo(this.onLenientChange),
      setJS: this.inDemo(this.onJSChange),
      formatLenient: this.inDemo(this.formatLenient),
    }).then(() => {
      this.inDemo(this.load)(0);
    });
  }

  inDemo(cb) {
    return (...args) => {
      if (this.state.inDemoMode) {
        cb(...args);
      }
    };
  }

  formatLenient = () => {
    lenientToLenient(this.state.lenient, this.options()).then(
      ({code, error}) => {
        this.setState(({lenient, js}) => ({
          lenient: ex(code, lenient),
          js: ex(error, js),
        }));
      },
    );
  };

  onLoadLenient = editor => {
    this.editorLenient = editor;
    editor.commands.addCommand({
      name: 'formatUsingPrettier',
      bindKey: {win: 'Ctrl-P', mac: 'Ctrl-P'},
      exec: _editor => {
        this.formatLenient();
      },
    });
  };

  onLoadJS = editor => {
    this.editorJS = editor;
  };

  render() {
    const editorProps = this.editorProps();
    return (
      <div>
        <div className="panes">
          <div className="pane">
            {/* <div className="editorPaneLabel">type in Lenient or standard JS</div> */}
            <Editor
              {...editorProps}
              value={this.state.lenient}
              onChange={this.onLenientChange}
              onLoad={this.onLoadLenient}
            />
          </div>
          <div className="editorPaneLabel">
            <div>→</div>
            <div>←</div>
          </div>
          <div className="pane">
            {/* <div className="editorPaneLabel">type in standard JS</div> */}
            <Editor
              {...editorProps}
              value={this.state.js}
              onChange={this.onJSChange}
              onLoad={this.onLoadJS}
            />
          </div>
        </div>
        <div className="editorFooter">
          <div className="editorExamples">
            {examples.map((_, i) => (
              <a
                key={i}
                data-active={i === this.state.example}
                onClick={() => this.load(i)}>
                •
              </a>
            ))}
          </div>
          <div className="editorActions">
            <div role="button" className="editorAction" onClick={this.expand}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18">
                <path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5
                  6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Editor = rc.pure(props => (
  <AceEditor
    {...props}
    fontSize={14}
    setOptions={{displayIndentGuides: false}}
    editorProps={{showIndentGuides: false, $blockScrolling: Infinity}}
    showGutter={false}
    showLineNumbers={false}
    showPrintMargin={false}
    highlightGutterLine={false}
    highlightActiveLine={false}
    mode="javascript"
    name="lenientEditor"
    tabSize={2}
    theme="tomorrow_night"
  />
));

const ex = (a, b) => (a != null ? a : b);

export default EditorPanes;
