import ReactModal from "react-modal";

const BlogModal = (props) => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '800px'
        },
        overlay: {
            backgroundColor: 'rgba(1, 1, 1, 0.75)'
        }
    }

  return (
    <ReactModal
        style={customStyles}
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
