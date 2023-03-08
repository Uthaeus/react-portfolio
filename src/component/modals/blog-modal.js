import { useState } from "react";
import ReactModal from "react-modal";

const BlogModal = props => {
    return (
        <ReactModal isOpen={true}>{props.children}</ReactModal>
    );
};


export default BlogModal;