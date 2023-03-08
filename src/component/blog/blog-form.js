import React, { Component } from "react";

class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.handleSuccessfulFormSubmission();
    
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          name="blog_status"
          placeholder="Blog status"
          value={this.state.blog_status}
        />

        <input
          type="text"
          onChange={this.handleChange}
          name="title"
          placeholder="Blog title"
          value={this.state.title}
        />

        <button>Save</button>
      </form>
    );
  }
}

export default BlogForm;
