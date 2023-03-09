import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import BlogFeaturedImage from "../component/blog/blog-featured-image";

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
        <h4>{blog_status}</h4>

        <BlogFeaturedImage img={featured_image_url} />

        <div className="content">{parse(content)}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
