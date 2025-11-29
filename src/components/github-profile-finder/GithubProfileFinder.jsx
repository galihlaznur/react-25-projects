import React, { useState } from "react";
import User from "./User";
import style from "./githubprofilefinder.module.css";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("galihlaznur");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchGithubUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (response.ok) {
        setUserData(data);
        setUsername("");
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching GitHub user data:", error);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style["github-profile-container"]}>
      <div className={style["input-wrapper"]}>
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData && <User user={userData} />}
    </div>
  );
};

export default GithubProfileFinder;
