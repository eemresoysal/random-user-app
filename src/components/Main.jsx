import React from "react";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaBirthdayCake, FaCity } from "react-icons/fa";
import "./mainStyle.css";

const Main = (info) => {
  const [user, setUser] = useState({
    name: false,
    mail: false,
    phone: false,
    city: false,
    age: false,
  });
  // console.log(info[0].picture.large);
  const { picture, name, email, phone, location, dob } = info;
  console.log(info);
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <img className="image" src={picture?.large} alt="" />
      </div>
      <div className="info">
        {user.name && (
          <div>
            <h3>Name</h3>
            <p>
              {name.first} {name.last}
            </p>
          </div>
        )}
        {user.mail && (
          <div>
            <h3>Email Adress</h3>
            <p>{email}</p>
          </div>
        )}
        {user.phone && (
          <div>
            <h3>Phone Number </h3>
            <p>{phone}</p>
          </div>
        )}
        {user.city && (
          <div>
            <h3>City</h3>
            <p>{location.city}</p>
          </div>
        )}
        {user.age && (
          <div>
            <h3>Age</h3>
            <p>{dob.age}</p>
          </div>
        )}
      </div>
      <div className="icons">
        <BiUserCircle
          className="icon"
          onMouseEnter={() => setUser({ ...user, name: true })}
          onMouseLeave={() => setUser({ ...user, name: false })}
        />

        <AiOutlineMail
          className="icon"
          onMouseEnter={() => setUser({ ...user, mail: true })}
          onMouseLeave={() => setUser({ ...user, mail: false })}
        />

        <AiFillPhone
          className="icon"
          onMouseEnter={() => setUser({ ...user, phone: true })}
          onMouseLeave={() => setUser({ ...user, phone: false })}
        />

        <FaCity
          className="icon"
          onMouseEnter={() => setUser({ ...user, city: true })}
          onMouseLeave={() => setUser({ ...user, city: false })}
        />

        <FaBirthdayCake
          className="icon"
          onMouseEnter={() => setUser({ ...user, age: true })}
          onMouseLeave={() => setUser({ ...user, age: false })}
        />
      </div>
    </div>
  );
};

export default Main;
