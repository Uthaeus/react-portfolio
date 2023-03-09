import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = (props) => {
  const currentId = useParams();
  const [blogItem, setBlogItem] = useState({});

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

  return (
    <div className="blog-container">
      <div className="content-container">
        <h1>{title}</h1>

        <div className="featured-image-wrapper">
            <img src={featured_image_url} alt="" />
        </div>

        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
