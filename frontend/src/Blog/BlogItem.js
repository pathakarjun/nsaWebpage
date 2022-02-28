import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BlogItem extends Component {
  render() {
    const { title, excerpt, date } = this.props.blog;
    var rDate = new Date(date);
    return (
      <div className=" relative w-[21rem] h-[27rem] overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg">
        <Link to="/">
          <img
            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="object-cover w-full h-28"
            alt=""
          />
          <div className="p-6 ">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600">{rDate.toDateString()}</span>
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: title.rendered }}
              className="inline-block py-0 text-xl font-bold  transition-colors duration-200 font-sans line-clamp-3 leading-[1.58]"
            />

            <p
              className="mb-2 text-gray-600 text-sm text-justify py-2 line-clamp-4 leading-7"
              dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
            />
            <p className="absolute bottom-5 font-semibold transition-colors duration-200 hover:text-deep-purple-800 text-left text-inherit">
              Read more
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default BlogItem;
