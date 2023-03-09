import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const RichTextEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
      />
    </div>
  );
};

export default RichTextEditor;
