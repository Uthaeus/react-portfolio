import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    return (
      <div>
        <h1>Blog Page</h1>

        <div>
          <Link to="/about-me">Read more about me</Link>
        </div>
      </div>
    );
  }
}

export default BlogPage;
