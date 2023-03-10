import { useState, useEffect } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const RichTextEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (props.editMode && props.contentToEdit) {
      const blocksFromHtml = htmlToDraft(props.contentToEdit);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      const editorState = EditorState.createWithContent(contentState);

      setEditorState(editorState);
    }
  }, [])

  const onEditorStateChange = editorState => {
    setEditorState(editorState);
    props.handleRichTextEditorChange(
        draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  }

  const getBase64= (file, callback) => {
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {
      console.log('readAsDataURL error', error);
    }
  }

  const uploadFile = file => {
    return new Promise((resolve, reject) => {
      getBase64(file, data => resolve({ data: { link: data }}))
    })
  }

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true},
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadFile,
            alt: { present: true, mandatory: false },
            previewImage: true,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg"
          }
        }}
      />
    </div>
  );
};

export default RichTextEditor;
