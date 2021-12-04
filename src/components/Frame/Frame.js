import React from "react";
import "./Frame.css";

const Frame = ({ phone, name, email, img }) => {
  return (
    <center>
      <div className="frame">
        <p>NAME : {name}</p>

        <p>Phone : {phone}</p>

        <p>Email : {email}</p>

        <p>{<img alt="User Image" width="100px" height="100px" src={img} />}</p>
      </div>
    </center>
  );
};

export default Frame;
