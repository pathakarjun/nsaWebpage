import React, { Component } from "react";

export class BlogItem extends Component {
  render() {
    const { title, excerpt } = this.props.blog;
    return (
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: title.rendered }}></h2>
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
      </div>
    );
  }
}

export default BlogItem;
