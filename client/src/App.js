import React, { useState, useEffect } from "react";
import api from "./api/api";

const App = () => {
  const [allTimeUsers, setAllTimeUsers] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await api.get("/stats/all-time");
  //     setAllTimeUsers(data);
  //   };
  //   fetchData();
  // }, []);
  const handleClick = async () => {
    const data = await api.get("/stats/all-time");
    setAllTimeUsers(data.data);
  };

  const renderAllTimeUsers = () => {
    return allTimeUsers.map((user) => {
      return (
        <ul>
          <li>name: {user.name}</li>
          <li>rank: {user.rank}</li>
          <li>honor: {user.honor}</li>
          <li>completed: {user.completed}</li>
        </ul>
      );
    });
  };
  return (
    <div>
      <h1>GET DATA</h1>
      <button onClick={handleClick}>Get the Data</button>
      {allTimeUsers && renderAllTimeUsers()}
    </div>
  );
};

export default App;
