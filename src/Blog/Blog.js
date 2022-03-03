import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";
import { isEmpty } from "lodash";

function Blog() {
  const latest = "";
  const general = "?categories=1";
  const jobintern = "?categories=4";
  const scholarships = "?categories=3";
  const scitech = "?categories=5";

  const [toogleState, setToogleState] = useState(latest);
  const [blog, setBlog] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    axios
      .get("/wp-json/wp/v2/posts" + toogleState)
      .then((res) => {
        setBlog(res.data);
        setIsLoaded(true);
        if (isEmpty(res.data)) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }
      })
      .catch((err) => console.log(err));
  }, [toogleState]);

  return (
    <div>
      <h1 className="text-5xl font-bold text-secondary text-center py-10 pt-20">
        From the blog
      </h1>
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px justify-center">
          <li className="mr-2">
            <button
              autoFocus={true}
              onClick={() => {
                setToogleState(latest);
              }}
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 focus:text-blue-600 focus:border-blue-600"
            >
              Latest
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => {
                setToogleState(general);
              }}
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 focus:text-blue-600 focus:border-blue-600"
            >
              General
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => {
                setToogleState(scholarships);
              }}
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 focus:text-blue-600 focus:border-blue-600 "
            >
              Scholarships
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => {
                setToogleState(jobintern);
              }}
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 focus:text-blue-600 focus:border-blue-600"
            >
              Job & Internship
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => {
                setToogleState(scitech);
              }}
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 focus:text-blue-600 focus:border-blue-600"
            >
              Science & Technology
            </button>
          </li>
        </ul>
      </div>
      {isLoaded ? (
        <div className="flex justify-center">
          <div className=" grid grid-cols-4 xl:grid-cols-3 ss:grid-cols-2 vs:grid-cols-1 gap-10 w-max py-20 gap-y-16">
            {blog.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      ) : (
        <h1> Loading....</h1>
      )}
      {empty && (
        <h1 className="text-center text-3xl text-gray-400  font-medium ">
          No Blog Post Yet!
        </h1>
      )}
    </div>
  );
}

export default Blog;
