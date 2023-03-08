import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BlogItem from "../component/blog/blog-item";

class BlogPage extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
    };

    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
    axios.get("https://romanlavery.devcamp.space/portfolio/portfolio_blogs", {
      withCredentials: true,
    }).then(response => {
        this.setState({
            blogItems: response.data.portfolio_blogs
        });
    }).catch(error => {
        console.log('getBlogItems error', error);
    })
  }

  componentWillMount() {
    this.getBlogItems();
  }

  render() {
    const blogRecords = this.state.blogItems.map(item => {
        return <BlogItem key={item.id} blogItem={item} />;
    });

    return (
      <div>
        {blogRecords}
      </div>
    );
  }
}

export default BlogPage;
