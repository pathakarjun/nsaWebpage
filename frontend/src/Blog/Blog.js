import React, { Component, Fragment } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";
import BlogHeader from "./BlogHeader";

export class Blog extends Component {
  state = {
    blog: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("wp-json/wp/v2/posts")
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
        <Fragment>
          <BlogHeader />
          <div className="grid grid-cols-3 md:grid-cols-1">
            {blog.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </Fragment>
      );
    }
    return <h1> Loading....</h1>;
  }
}

export default Blog;
