import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamCard from "../UI/TeamCard";

export default function Team() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("https://wordpress.nsattu.com/wp-json/wp/v2/teams?per_page=20")
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" max-w-6xl min-w-min px-10 py-10 mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize ">
        Our Executive Team
      </h1>
      <div className="grid grid-cols-4 gap-8 mt-10 md:grid-cols-3 vm:grid-cols-1 vm:container vm:ms-auto ms:grid-cols-2 ">
        {teams.map((teams) => (
          <TeamCard key={teams.id} teams={teams} />
        ))}
      </div>
    </div>
  );
}
