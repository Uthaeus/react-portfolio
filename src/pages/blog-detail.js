import { useState, useEffect } from "react";
import axios from "axios";

const BlogDetail = (props) => {
  const [currentId, setCurrentId] = useState(props.match.params.slug);
  const [blogItem, setBlogItem] = useState({});

  const getBlogItem = () => {
    axios.get(
      `https://romanlavery.devcamp.space/portfolio/portfolio_blogs/${currentId}`
    ).then(response => {

    }).catch(error => {
        console.log('getBlogItem error', error);
    })
  };

  useEffect(() => {
    getBlogItem();
  }, []);

  return <h1>Detail</h1>;
};

export default BlogDetail;
