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
      .get("http://localhost:8000/wp-json/wp/v2/posts")
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
          <div className="flex justify-center">
            <div className=" grid grid-cols-4 xl:grid-cols-3 ss:grid-cols-2 vs:grid-cols-1 gap-16 w-max py-20">
              {blog.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </Fragment>
      );
    }
    return <h1> Loading....</h1>;
  }
}

export default Blog;
