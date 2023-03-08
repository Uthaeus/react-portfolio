import { useState } from "react";
import ReactModal from "react-modal";

const BlogModal = props => {
    return (
        <ReactModal isOpen={props.modalIsOpen}>{props.children}</ReactModal>
    );
};


export default BlogModal;