import React, { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

function About() {

  function handleRegister(event) {
    event.preventDefault();

    emailjs.sendForm('Service_ID', 'Template_ID', event.target, 'Public_Key');

    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var bikeName = document.getElementById("bikeName").value;
    var bikeModel = document.getElementById("bikeModel").value;
    var bikeNumber = document.getElementById("bikeNumber").value;
    var serviceMessage = document.getElementById("serviceMessage").value;

    var userdetails = {
      name: fullName,
      contact: phoneNumber,
      email: emailAddress,
      bike_name: bikeName,
      bike_model: bikeModel,
      bike_number: bikeNumber,
      message: serviceMessage,
  };
  
    axios.post("http://localhost:3456/createuser", userdetails)
      .then((response) => {
        if (response.data.Status === "error") {
            alert("Please check your data's")
        }
        else if (response.data.Status === "Success") {
            alert("The Store Owner will contact you")
        }
    })
    
    
  }

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Book your Service</h1>
            <form
              onSubmit={handleRegister}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
              }}
            >
              <input
                type="text"
                id="fullName"
                name="from_name"
                placeholder="Full Name"
                required
              />
              <input
                type="text"
                id="phoneNumber"
                name="from_phoneNumber"
                placeholder="Phone Number"
                required
              />
              <input
                type="email"
                id="emailAddress"
                name="from_email"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                id="bikeName"
                name="from_bikeName"
                placeholder="Bike Name"
                required
              />
              <input
                type="text"
                id="bikeModel"
                name="from_bikeModel"
                placeholder="Bike Model"
                required
              />
              <input
                type="text"
                id="bikeNumber"
                name="from_bikeNumber"
                placeholder="Bike Number"
                required
              />
              <textarea
                id="serviceMessage"
                name="message"
                placeholder="Message with a service date"
                required
                style={{ gridColumn: "span 2" }}
              ></textarea>
              <button type="submit" style={{ gridColumn: "span 2" }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
