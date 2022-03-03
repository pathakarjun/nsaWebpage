import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function BlogContent() {
  const [blogPage, setBlogPage] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/wp-json/wp/v2/posts/${id}`)
      .then((res) => {
        setBlogPage(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { title, date, content, acf } = blogPage;
  var pDate = new Date(date);
  const imgUrl = `https://robohash.org/${pDate}`;

  console.log(pDate);
  return (
    <Fragment>
      {isLoaded ? (
        <div className="container w-full mx-auto pt-20 mb-40 px-6">
          <div className="w-full px-4 text-xl text-gray-800 leading-normal">
            <Link to="/blog" className="text-base text-blue-500 font-bold">
              &lt; BACK TO BLOG
            </Link>
            <h1
              className="font-bold break-normal text-gray-900 pt-8 pb-2 text-4xl"
              dangerouslySetInnerHTML={{ __html: title.rendered }}
            />
            <p className="text-base font-normal text-gray-600">
              Published on {pDate.toDateString()}
            </p>
            <p
              class="py-10 space-y-10"
              dangerouslySetInnerHTML={{ __html: content.rendered }}
            />
          </div>
          <hr className="border-b-2 border-gray-400  mx-4" />
          <div className="flex w-full items-center font-sans px-4 py-8">
            <img
              className=" w-16 h-16 rounded-full mr-2 -ml-4"
              src={imgUrl}
              alt="Avatar of Author"
            />
            <div className="flex-1 mt-4">
              <p className="text-base font-bold  md:text-xl leading-none mb-2">
                {acf.author}
              </p>
              <p className="text-gray-600 text-xs md:text-base">
                {acf.subtext}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </Fragment>
  );
}
