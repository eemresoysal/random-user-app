import React from "react";
import "./mainStyle.css";

const AddUser = ({ addUser }) => {
  console.log(addUser);
  //   const { name, email, phone, dob } = addPerson[0];
  return (
    <table className="table table-secondary table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {addUser.map((item, index) => {
          const { name, email, phone, dob } = item;
          return (
            <tr key={index}>
              <td>
                {name.first} {name.last}
              </td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AddUser;
