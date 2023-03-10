import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

import BlogFeaturedImage from "../component/blog/blog-featured-image";
import BlogForm from "../component/blog/blog-form";

const BlogDetail = (props) => {
  const currentId = useParams();
  const [blogItem, setBlogItem] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleUpdateFormSubmission = blog => {
    setBlogItem(blog);
    setEditMode(false);
  }

  const handleFeaturedImageDelete = () => {
    setBlogItem((prevState) => ({
      ...prevState,
      featured_image_url: "",
    }));
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const getBlogItem = () => {
    axios
      .get(
        `https://romanlavery.devcamp.space/portfolio/portfolio_blogs/${currentId.slug}`
      )
      .then((response) => {
        setBlogItem(response.data.portfolio_blog);
      })
      .catch((error) => {
        console.log("getBlogItem error", error);
      });
  };

  useEffect(() => {
    getBlogItem();
  }, []);

  const { title, content, featured_image_url, blog_status } = blogItem;

  const contentManager = () => {
    if (editMode) {
      return (
        <BlogForm
          handleFeaturedImageDelete={handleFeaturedImageDelete}
          handleUpdateFormSubmission={handleUpdateFormSubmission}
          editMode={editMode}
          blog={blogItem}
        />
      );
    } else {
      return (
        <div className="content-container">
          <h1 onClick={handleEditClick}>{title}</h1>
          <h4>{blog_status}</h4>

          <BlogFeaturedImage img={featured_image_url} />

          <div className="content">{parse(content)}</div>
        </div>
      );
    }
  };

  return <div className="blog-container">{contentManager()}</div>;
};

export default BlogDetail;
