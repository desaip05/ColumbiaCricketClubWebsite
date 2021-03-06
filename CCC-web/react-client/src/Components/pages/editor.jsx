import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    
	const editorState = props.editorState;
	this.state = {
		editorState
	};
	this.onEditorStateChange = this.onEditorStateChange.bind(this);
}

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (
        <div class="form-group">
	        <Editor
	          editorState={editorState}
	          wrapperClassName="demo-wrapper"
	          editorClassName="demo-editor"
	          onEditorStateChange={this.onEditorStateChange}
	        />
	        <textarea
	          disabled
	          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
	        />
      	</div>
    );
  }
}

export default EditorConvertToHTML;