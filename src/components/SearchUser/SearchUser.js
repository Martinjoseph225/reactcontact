import React, { useState } from "react";
import { Firebase } from "../../config";
import Frame from "../Frame/Frame";
import "./SearchUser.css";

const SearchUser = () => {
  const [user, setUser] = useState("");
  //   window.addEventListener("load", () => {
  //     Fetchdata();

  //   });
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setId(e.target.value);
  };
  const Fetchdata = (phone) => {
    // console.log("test2");
    if (phone) {
      Firebase.firestore()
        .collection("contact")
        .doc(phone)
        .get()
        .then((querySnapshot) => {
          // Loop through the data and store
          // it in array to display
          const docData = querySnapshot.data();
          setUser(docData);
          // querySnapshot.forEach((element) => {
          //   var data = element.data();
          //   setUser((user) => [...user, data]);
          // });
        });
    }
  };

  return (
    <div className="searchuser">
      <label>
        <h2>Search User by Phone Number</h2>
      </label>
      <input
        className="search_input"
        name="phone"
        type="number"
        placeholder="Phone"
        value={id}
        onChange={handleChange}
      ></input>
      <button
        className="searchbutton"
        type="submit"
        onClick={() => Fetchdata(id)}
      >
        Get Data
      </button>
      <div className="frame">
        {" "}
        {user ? (
          <Frame
            name={user.name}
            phone={user.phone}
            email={user.email}
            img={user.img}
          />
        ) : (
          "Please enter a valid Phone Number"
        )}
      </div>
      {/* {user.map((data) => (
        <Frame name={data.name} phone={data.phone} email={data.email} />
      ))} */}
    </div>
  );
};

export default SearchUser;
