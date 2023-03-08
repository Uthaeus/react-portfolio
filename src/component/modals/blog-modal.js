import ReactModal from "react-modal";

const BlogModal = (props) => {
  return (
    <ReactModal
      onRequestClose={() => {
        props.handleModalClose();
      }}
      isOpen={props.modalIsOpen}
    >
      <h1>in modal</h1>
    </ReactModal>
  );
};

export default BlogModal;
