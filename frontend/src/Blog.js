import React, { Component } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

export class Blog extends Component {
  state = {
    blog: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/posts")
      .then((res) =>
        this.setState({
          blog: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { blog, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {blog.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      );
    }
    return <h1> Loading....</h1>;
  }
}

export default Blog;
