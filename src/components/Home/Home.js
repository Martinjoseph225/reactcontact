import React from "react";
import "./Home.css";
import book from "./book.jpg";
const Home = () => {
  return (
    <div className="home">
      <h2 className="para1">
        This App is just a contact book to add and retrive data by react and
        firebase
      </h2>
      <h2 className="para1">
        You can build a new contact and search for the same
      </h2>
      <h2 className="para">* Add User to add new contact</h2>
      <h2 className="para">* Search User to search existing contact</h2>
      <h2 className="para">
        * Contact Us will send me your feedback to my mail id
      </h2>
      <img
        className="img"
        src={book}
        width="350px"
        height="250px"
        alt="contact book"
      />
      <h2 class="tech">
        Tech stacks used: React.js, Firebase, Bootstrap, EmailJs
      </h2>
    </div>
  );
};

export default Home;
