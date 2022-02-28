import React, { useState } from "react";
import Blog from "./Blog";

function BlogHeader() {
  const latest = "";
  const general = "?categories=1";
  const jobintern = "?categories=4";
  const scholarships = "?categories=3";
  const scitech = "?categories=5";
  const [toogleState, setToogleState] = useState(latest);
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
      <Blog categories={toogleState} />
    </div>
  );
}

export default BlogHeader;
