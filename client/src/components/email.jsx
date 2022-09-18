import React, { useState, useRef } from "react";
import Links from "./Links";
import emailjs from "emailjs-com";


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID || process.env.SERVICE_ID; 
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID || process.env.TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID || process.env.USER_ID;

 function Email() {  
  const form = useRef();
  const [emailInfo, setEmailInfo] = useState({
    user_name: "",
    message: "",
    user_email: "",
  });
  const [contactInfo, setContactInfo] = useState({
    name: false,
    message: false,
    email: false,
  });

  const emailReady = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
          console.log(`Status: ${result.status} \n Status: ${result.text} \n Message: Thank you for reaching out!`);
      }, (error) => {
          console.log(error.text);
      });

    setContactInfo({
      name: false,
      message: false,
      email: false,
    });
    setEmailInfo({
      user_name: "",
      message: "",
      user_email: "",
    });
  };

  const insertInfo = {
    needInfo: (x) => {
      setContactInfo((preValue) => {
        return {
          ...preValue,
          [x]: true,
        };
      });
    },
    completeInfo: (x, y, z) => {
      setContactInfo(() => {
        return {
          [x]: false,
          [y]: false,
          [z]: false,
        };
      });
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      emailInfo.user_name === "" ||
      emailInfo.message === "" ||
      emailInfo.user_email === ""
    ) {
      setContactInfo({
        name: true,
        message: true,
        email: true,
      });
    } else {
      insertInfo.completeInfo("name", "message", "email");
      emailReady(e);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEmailInfo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <div className="emailForm">
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <p className="formPara">Fill out the form to get in contact.</p>
        <label className="formInfo">
          Name:
          <input
            className={contactInfo.name ? "conName formIncomplete" : "conName"}
            type="text"
            name="user_name"
            value={emailInfo.user_name}
            placeholder={contactInfo.name ? "Please add Name" : null}
            onChange={handleChange}
          />
        </label>
        <label className="formInfo">Message: </label>
        <textarea
          className={
            contactInfo.message ? "conMessage messageIncomplete" : "conMessage"
          }
          type="text"
          name="message"
          placeholder={contactInfo.message ? "Please add Message" : null}
          value={emailInfo.message}
          onChange={handleChange}
        />
        <label className="formInfo">
          Email:
          <input
            className={
              contactInfo.email ? "conEmail formIncomplete" : "conEmail"
            }
            type="email"
            name="user_email"
            value={emailInfo.user_email}
            placeholder={contactInfo.email ? "Please add Email" : null}
            onChange={handleChange}
          />
        </label>
        <button className="emailFormButton" type="submit" value="send">
          <strong>Send</strong>
        </button>
      </form>
      <Links linkBox="contactLinks" />
    </div>
  );
}

export default Email;