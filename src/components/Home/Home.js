import React from "react";
import "./Home.css";
import book from "./book.jpg";
const Home = () => {
  return (
    <div className="home">
      <h2 className="para1">
        This is just a contact book to add and retrive data by react and
        firebase
      </h2>
      <h2 className="para1">You can build new contact and search the same</h2>
      <h2 className="para">* Add User to add new contact</h2>
      <h2 className="para">* Search User to serach existing contact</h2>
      <h2 className="para">
        * Contact Us to will send me your feedback in mail
      </h2>
      <img
        className="img"
        src={book}
        width="350px"
        height="250px"
        alt="contact book"
      />
    </div>
  );
};

export default Home;
