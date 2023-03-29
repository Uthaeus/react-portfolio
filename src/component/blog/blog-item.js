import { Link } from "react-router-dom";
import striptags from "striptags";
import { TruncateLines } from "react-truncate-lines";

const BlogItem = (props) => {
  const {
    id,
    //blog_status,
    content,
    title,
    //featured_image_url
  } = props.blogItem;

  return (
    <div className="blog-item-container">
      <Link to={`/b/${id}`}>
        <h1>{title}</h1>
      </Link>

      <div className="blog-item-content">
        <TruncateLines
          lines={2}
          ellipsis={
            <span>
              ...<Link to={`/b/${id}`}>Read more</Link>
            </span>
          }
        >
          {striptags(content)}
        </TruncateLines>
      </div>
    </div>
  );
};

export default BlogItem;
