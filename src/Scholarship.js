import React, { useState, useEffect } from "react";
import axios from "axios";
import FaqCard from "./UI/FaqCard";

export default function Scholarship() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://wordpress.nsattu.com/wp-json/wp/v2/scholarships?per_page=50"
      )
      .then((res) => {
        setScholarships(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div className="container w-full mx-auto pt-20 mb-40 px-6">
          {scholarships.map((scholarships) => (
            <FaqCard key={scholarships.id} data={scholarships} />
          ))}
        </div>
      ) : (
        <h1> Loading....</h1>
      )}
    </div>
  );
}
