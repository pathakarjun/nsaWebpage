import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

export default function CreateBlog() {
  const form = document.getElementById("blogForm");
  const [token, setToken] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    username: "user",
    password: "YoxWSMLbdYP1",
  };

  useEffect(() => {
    axios
      .post("https://wordpress.nsattu.com/wp-json/jwt-auth/v1/token", data, {
        headers: headers,
      })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    var blogData = JSON.stringify({
      title: event.target.elements.title.value,
      content: event.target.elements.content.value,
      acf: {
        author: _.isEmpty(event.target.elements.name.value)
          ? "Anonymous"
          : event.target.elements.name.value,
        subtext: event.target.elements.role.value,
      },
    });

    axios
      .post(
        "https://wordpress.nsattu.com/wp-json/wp/v2/posts/",
        blogData,
        axiosConfig
      )
      .then((res) => {
        setSuccess(true);
        form.reset();
      })
      .catch((err) => setFailed(true));
  };

  return (
    <div className="container w-full mx-auto my-20 px-5">
      <h1 className="text-5xl font-bold text-secondary ">
        <span role="img" aria-label="publish" className="mr-2 -ml-5">
          📝
        </span>
        Publish a Blog
      </h1>
      <form onSubmit={handleSubmit} id="blogForm">
        <ul className=" flex flex-wrap pt-28 pb-24 space-y-8">
          <div className="relative flex w-full justify-end">
            <label className="absolute left-0 block mb-2 text-xl font-medium text-gray-600 ">
              Title
            </label>
            <input
              placeholder="blog title"
              className=" block w-9/12 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
              name="title"
              required
            />
          </div>

          <div className="relative flex w-full justify-end border-t-2 border-gray-100 pt-8">
            <label className="absolute left-0  block mb-2 text-xl font-medium text-gray-600 ">
              Content
            </label>
            <textarea
              placeholder="your blog content !"
              name="content"
              className="w-9/12 h-[35rem] block px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="relative flex w-full justify-end border-t-2 border-gray-100 pt-8">
            <label className="absolute left-0 block mb-2 text-xl font-medium text-gray-600 ">
              Name
            </label>
            <input
              placeholder="your name"
              name="name"
              className=" block w-9/12 px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              type="text"
            />
          </div>
          <div className="relative flex w-full justify-end border-t-2 border-gray-100 pt-8 pb-20">
            <label className="absolute left-0 block mb-2 text-xl font-medium text-gray-600 ">
              Role
            </label>
            <div className=" w-9/12">
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="current"
                    name="role"
                    type="radio"
                    className=" form-radio h-5 w-5"
                    value="Current TTU Student"
                  />
                  <label
                    htmlFor="current"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Current TTU Student
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="alumini"
                    name="role"
                    type="radio"
                    className="form-radio h-5 w-5"
                    value="TTU Alumini"
                  />
                  <label
                    htmlFor="alumini"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    TTU Alumini
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="blogger"
                    name="role"
                    type="radio"
                    className=" form-radio h-5 w-5"
                    value="Content Writer"
                    defaultChecked
                  />
                  <label
                    htmlFor="blogger"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Content Writer
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className=" inline-block px-12 py-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Submmit
          </button>
        </ul>
      </form>
      <div>
        {success && (
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
            <div className="flex items-center justify-center w-12 bg-blue-500">
              <svg
                className=" w-12 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-blue-500 ">Success</span>
                <p className="text-sm text-gray-600">
                  Your blog post has been submitted and will be posted shortly
                  after a review!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {failed && (
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-center w-12 bg-red-500">
              <svg
                className="w-12 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-red-500 ">Error</span>
                <p className="text-sm text-gray-600 ">
                  Your blog post was not recieved. Please try again!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
