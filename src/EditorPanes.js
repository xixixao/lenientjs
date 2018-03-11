import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow_night';
import {simulateKeys} from './helpers';
import {lenientToJS, jsToLenient} from './transpile';
import * as rc from 'recompose';

class EditorPanes extends React.Component {
  state = {
    lenient: '',
    js: '',
    expanded: false,
  };

  onLenientChange = value => {
    this.setState({lenient: value});
    lenientToJS(value, this.options()).then(({code, error}) => {
      this.setState(({js}) => ({js: ex(code, js)}));
    });
  };

  onJSChange = value => {
    this.setState({js: value});
    jsToLenient(value, this.options()).then(({code, error}) => {
      this.setState(({lenient}) => ({lenient: ex(code, lenient)}));
    });
  };

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
      height: (expanded ? window.innerHeight - 146 : 346) + 'px',
      width: (expanded ? (window.innerWidth - 120) / 2 : 485) + 'px',
    };
  }

  componentDidMount() {
    // simulateKeys(LENIENT, value => this.onLenientChange(value), () => {});
    this.onJSChange(JS);
  }

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
            />
          </div>
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
    );
  }
}

const JS = `// Go ahead, edit code in either pane

let number = 42;

const opposite = true;

if (opposite) {
  number = -42;
}

const square = x => x * x;

const list = [1, 2, 3, 4, 5];

const math = {
  root: Math.sqrt,
  square: square,
  cube: x => {
    return x * square(x);
  }
};

const race = (winner, ...runners) => {
  print(winner, runners);
};

if (elvis ?? false) {
  alert("I knew it!");
}

for (const num of list) {
  print(math.cube(num));
}

class B extends A {
  getExample() {
    return 'Hello world!';
  }

  setState = x => {
    this.state = x;
  };
}
`;

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
