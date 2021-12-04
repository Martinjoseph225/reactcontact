import React from "react";
// import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_vbkclb8",
        "template_sj9blra",
        e.target,
        "user_IvzyksSwWobcc0ONDDHqv"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="container border"
      style={{
        padding: "10px",
        marginTop: "50px",
        width: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          marginTop: "25px",
          marginLeft: "20%",

          textalign: "center",
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Please feel free to share your valuable feedack here.
        <br /> I will be receiving a mail on your feedback
      </div>
      <form
        className="row"
        style={{ margin: "auto", maxWidth: "300px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          style={{
            minWidth: "150px",
          }}
        />

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="form-control"
          style={{
            minWidth: "150px",
          }}
        />
        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          className="form-control"
          style={{
            minWidth: "150px",
          }}
        ></textarea>
        <input
          type="submit"
          value="send"
          className="form-control btn btn-primary"
          style={{ marginTop: "20px", minWidth: "150px" }}
        ></input>
      </form>
      {/* <textarea
        rows="4"
        cols="50"
        name="comment"
        form="usrform"
        placeholder="Enter text here..."
      ></textarea> */}
      {/* <button className="submit">Submit</button> */}
    </div>
  );
};

export default Contact;

// import React, { useState } from "react";
// import "./ContactAdd.css";
// import { Firebase } from "../../config";

//   return (
//     <>
//       {/* <button
//         type="submit"
//         onClick={() => {
//           Firebase.firestore()
//             .collection("contact")
//             .get()
//             .then((snapshot) => {
//               snapshot.forEach((obj) => {
//                 console.log(obj.data(), obj.id);
//               });
//             });
//         }}
//       >
//         Get Data
//       </button> */}
//       <button className="add" type="submit" onClick={handleSubmit}>
//         Add User
//       </button>
//       {/* <button
//         type="submit"
//         onClick={() => {
//           Firebase.firestore()
//             .collection("contact")
//             .doc("idgoeshere")
//             .delete()
//             .then(() => {
//               console.log("deleted");
//             });
//         }}
//       >
//         Delete Data
//       </button>
//       <button
//         type="submit"
//         onClick={() => {
//           Firebase.firestore()
//             .collection("contact")
//             .doc("idgoeshere")
//             .set({ name: "updated" })
//             .then(() => {
//               console.log("updated");
//             });
//         }}
//       >
//         Update Data
//       </button> */}
//     </>
//   );
// };

// export default ContactAdd;
