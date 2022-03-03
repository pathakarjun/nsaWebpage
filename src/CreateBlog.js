import React from "react";

export default function CreateBlog() {
  return (
    <div className="container w-full mx-auto my-20 px-10">
      <h1 className="text-5xl font-bold text-secondary ">
        <span role="img" aria-label="publish" className="mr-2">
          📝
        </span>
        Publish a Blog
      </h1>
      <ul className=" flex flex-wrap py-28 space-y-8">
        <div className="relative flex w-full justify-end">
          <label className="absolute left-0 block mb-2 text-xl font-medium text-gray-600 ">
            Title
          </label>
          <input
            placeholder="blog title"
            className=" block w-9/12 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="text"
          />
        </div>

        <div className="relative flex w-full justify-end border-t-2 border-gray-100 pt-8">
          <label className="absolute left-0  block mb-2 text-xl font-medium text-gray-600 ">
            Content
          </label>
          <textarea
            placeholder="your blog content !"
            className="w-9/12 h-[35rem] block px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="relative flex w-full justify-end border-t-2 border-gray-100 pt-8">
          <label className="absolute left-0 block mb-2 text-xl font-medium text-gray-600 ">
            Name
          </label>
          <input
            placeholder="your name"
            className=" block w-9/12 px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-300 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="text"
          />
        </div>
        <div className="relative flex w-full justify-end border-t-2 border-gray-100 pt-8">
          <label className="absolute left-0 block mb-2 text-xl font-medium text-gray-600 ">
            Role
          </label>
          <div className=" w-9/12">
            <div class="mt-4 space-y-4">
              <div class="flex items-center">
                <input
                  id="current"
                  name="role"
                  type="radio"
                  class=" form-radio h-5 w-5"
                />
                <label
                  for="current"
                  class="ml-3 block text-sm font-medium text-gray-700"
                >
                  Current TTU Student
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="alumini"
                  name="role"
                  type="radio"
                  class="form-radio h-5 w-5"
                />
                <label
                  for="alumini"
                  class="ml-3 block text-sm font-medium text-gray-700"
                >
                  TTU Alumini
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="blogger"
                  name="role"
                  type="radio"
                  class=" form-radio h-5 w-5"
                  defaultChecked
                />
                <label
                  for="blogger"
                  class="ml-3 block text-sm font-medium text-gray-700"
                >
                  Content Writer
                </label>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submmit
        </button>
      </ul>
    </div>
  );
}
