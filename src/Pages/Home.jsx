import React from "react";
import Main from "../components/Main";
import { useState, useEffect } from "react";
import "../components/mainStyle.css";
import AddUser from "../components/AddUser";

const Home = () => {
  const [info, setInfo] = useState();
  const [addUser, setAddUser] = useState([]);
  const url = "https://randomuser.me/api/";

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfo(data.results[0]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddUser = () => {
    if (!addUser.includes(info)) {
      setAddUser([...addUser, info]);
    }
  };

  return (
    <div className="box">
      <Main {...info} />
      <div className="buttons">
        <button className="rndButton xbutton" onClick={fetchData}>
          Random User
        </button>
        <button onClick={handleAddUser} className="addButton xbutton">
          Add User
        </button>
      </div>
      <div className="table-container addUser">
        {addUser.length > 0 && <AddUser addUser={addUser} />}
      </div>
    </div>
  );
};

export default Home;
