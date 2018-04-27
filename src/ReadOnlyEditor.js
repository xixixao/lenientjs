import 'brace/mode/javascript';
import 'brace/theme/tomorrow_night';

import React from 'react';
import AceEditor from 'react-ace';

export default props => (
  <div className="snippet">
    <AceEditor
      fontSize={14}
      setOptions={{displayIndentGuides: false}}
      editorProps={{showIndentGuides: false, $blockScrolling: Infinity}}
      showGutter={false}
      showLineNumbers={false}
      showPrintMargin={false}
      highlightGutterLine={false}
      highlightActiveLine={false}
      mode="javascript"
      readOnly={true}
      tabSize={2}
      theme="tomorrow_night"
      value={props.children}
      width=""
      height={props.children.split('\n').length * 19 + 'px'}
    />
  </div>
);
