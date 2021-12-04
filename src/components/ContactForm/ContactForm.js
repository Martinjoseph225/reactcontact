import React, { useState } from "react";
import "./ContactForm.css";

import { Firebase } from "../../config";

const ContactForm = () => {
  const initial = { name: "", email: "", phone: "", img: "" };
  const [value, setValue] = useState(initial);
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name", name);
    // console.log("value", value);
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.storage()
      .ref(`/image/${image?.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          if (url) {
            setValue((prevState) => ({
              ...prevState,
              img: url,
            }));
            console.log("img url", value.img);
          }
        });
      });
    if (value.phone) {
      Firebase.firestore()
        .collection("contact")
        .doc(value.phone)
        .set(value)
        .then(alert("Contact Added"));
    }
  };
  // console.log("value", value);
  return (
    <div className="ConForm">
      <div className="adduser">
        <form className="form">
          <label>Name </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={value.name}
            onChange={handleChange}
          ></input>
          <label>Email </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={value.email}
            onChange={handleChange}
          ></input>
          <label>Phone </label>
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            value={value.phone}
            onChange={handleChange}
          ></input>
          <label>Photo </label>
          {image && (
            <img
              alt="image"
              width="100px"
              height="100px"
              src={image ? URL.createObjectURL(image) : ""}
            ></img>
          )}
          <input
            className="image"
            name="img"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          ></input>
          <button className="add" type="submit" onClick={handleSubmit}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
