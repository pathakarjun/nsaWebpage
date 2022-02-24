import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BlogItem extends Component {
  render() {
    const { title, excerpt } = this.props.blog;
    return (
      <div className="px-8 py-12 justify-center md:pt-12 md:pb-6">
        <div className=" relative w-96 h-[28rem] overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg">
          <Link to="/">
            <img
              src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-48"
              alt=""
            />
            <div className="p-6 ">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">28 Dec 2020</span>
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: title.rendered }}
                className="inline-block py-3 text-xl font-bold leading-5 transition-colors duration-200 "
              />

              <p
                className="mb-2 text-gray-700"
                dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
              />
              <p className="absolute bottom-6 font-semibold transition-colors duration-200 hover:text-deep-purple-800 text-left">
                Read more
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default BlogItem;
