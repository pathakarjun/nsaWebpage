import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BlogItem extends Component {
  render() {
    const { title, excerpt, date, id, acf } = this.props.blog;

    var rDate = new Date(date);
    const imgUrl = `https://robohash.org/${rDate}`;
    return (
      <div className=" relative w-[21rem] h-[23rem] overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-2xl">
        <Link to={`/blogContent/${id}`}>
          <div className="object-cover w-full h-4 bg-blue-600" alt="" />
          <div className="p-6 ">
            <div className="h-[15rem] overflow-hidden ">
              <p
                dangerouslySetInnerHTML={{ __html: title.rendered }}
                className="inline-block py-0 text-xl font-bold  transition-colors duration-200 font-sans line-clamp-3 leading-[1.58]"
              />

              <p
                className="mb-2 text-gray-600 text-sm py-3 leading-7 whitespace-normal"
                dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
              />
            </div>

            <hr className="border-b-1 border-gray-200  mx-4 my-4" />

            <div className="flex w-full items-center font-sans absolute bottom-4 bg-white">
              <img
                className=" w-12 h-12 rounded-full mr-2 -ml-2"
                src={imgUrl}
                alt="Avatar of Author"
              />
              <div className="flex-1 mt-4">
                <p className=" text-sm font-medium  leading-none mb-2">
                  {acf.author}
                </p>
                <p className="text-gray-500 text-xs ">{rDate.toDateString()}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default BlogItem;
