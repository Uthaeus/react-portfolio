import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BlogItem from "../component/blog/blog-item";

class BlogPage extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true
    };

    this.getBlogItems = this.getBlogItems.bind(this);
    this.activateInfiniteScroll();
  }

  activateInfiniteScroll() {
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            console.log('get more posts');
        }
    }
  }

  getBlogItems() {
    this.setState({
        currentPage: this.state.currentPage + 1
    });

    axios
      .get("https://romanlavery.devcamp.space/portfolio/portfolio_blogs", {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          blogItems: response.data.portfolio_blogs,
          totalCount: response.data.meta.total_records,
          isLoading: false
        });
      })
      .catch((error) => {
        console.log("getBlogItems error", error);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }

  render() {
    const blogRecords = this.state.blogItems.map((item) => {
      return <BlogItem key={item.id} blogItem={item} />;
    });

    return (
      <div className="blog-container">
        
        <div className="content-container">{blogRecords}</div>

        {this.state.isLoading && (
            <div className="content-loader">
                <FontAwesomeIcon icon='spinner' spin />
            </div>
        )}
      </div>
    );
  }
}

export default BlogPage;
