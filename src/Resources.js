import React, { useState, useEffect } from "react";
import axios from "axios";
import FaqCard from "./UI/FaqCard";

export default function Resources() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get("https://wordpress.nsattu.com/wp-json/wp/v2/resources?per_page=50")
      .then((res) => {
        setResources(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div className="container w-full mx-auto pt-20 mb-40 px-6 md:px-2">
          {resources.map((resources) => (
            <FaqCard key={resources.id} data={resources} />
          ))}
        </div>
      ) : (
        <h1> Loading....</h1>
      )}
    </div>
  );
}
