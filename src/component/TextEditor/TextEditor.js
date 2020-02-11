import React from 'react';
import AceEditor from 'react-ace';
import PropTypes from 'prop-types';
import 'brace/mode/yaml';
import 'brace/theme/chrome';

class TextEditor extends React.Component {
  render() {
    return (
      <AceEditor
        mode="yaml"
        theme="chrome"
        editorProps={{ $blockScrolling: true }}
        height='100%'
        width='100%'
        value={this.props.text}
        {...this.props.aceEditorProps}
      />
    )
  }
}

TextEditor.propTypes = {
  text: PropTypes.string,
  aceEditorProps: PropTypes.object
};

TextEditor.defaultProps = {
  aceEditorProps: null,
  text: ''
}

export default TextEditor;