const BlogFeaturedImage = (props) => {
  if (!props.img) {
    return null;
  }

  return (
    <div className="featured-image-wrapper">
      <img src={props.img} alt="" />
    </div>
  );
};

export default BlogFeaturedImage;
