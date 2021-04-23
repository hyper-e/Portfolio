import React, { useState } from "react";
import emailjs from "emailjs-com";
import Links from "./Links";
import SendIcon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
console.log(process.env.USER_ID)
function Email() {
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
    console.log("email sent");
    setContactInfo({
      name: false,
      message: false,
      email: false
    });
    setEmailInfo({
      user_name: "",
      message: "",
      user_email: ""
   })
    emailjs
      .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then(
        (result) => {
          // console.log(result.text);
           console.log(result.status)
        },
        (error) => {
          console.log(error.text);
        }
      );
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

  //   const insertInfo = (x, y, z, active) => {
  //     const missingInfo = {
  //       yes: function () {
  //         setContactInfo((preValue) => {
  //           return {
  //             ...preValue,
  //             [x]: active,
  //           };
  //         });
  //       },
  //       no: function() {
  //           setContactInfo((preValue) => {
  //               return {
  //                   ...preValue,
  //                   [x] : active,
  //                   [y] : active,
  //                   [z] : active
  //               }
  //           })
  //       }
  //     };
  //   };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(
      `${contactInfo.name} \n ${contactInfo.message} \n ${contactInfo.email}`
    );

    if (emailInfo.user_name === "" || emailInfo.message === "" || emailInfo.user_email === "") {
      setContactInfo({
        name: true,
        message: true,
        email: true
      })
    } else {
      insertInfo.completeInfo("name", "message", "email");
      emailReady(e);
      console.log(
        `${contactInfo.name} \n ${contactInfo.message} \n ${contactInfo.email}`
      );
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

  const activeLine = () => {
    return true
  };

  return (
    <div className="emailForm">
    <form className="contactForm" onSubmit={sendEmail}>
    <p className="formPara">Fill out the form to get in contact.</p>
      <label className="formInfo">Name:
      <input 
        className={contactInfo.name ? "conName formIncomplete" : "conName"}
        type="text"
        name="user_name"
        value={emailInfo.user_name}
        placeholder={contactInfo.name ? "Please add Name" : null}
        onChange={handleChange}
      //  onClick={(e) => {
      //     e.preventDefault();
      //     e.target.style.borderBottomColor = "#ca3e47"
      //   }} 
      /></label>
      <label className="formInfo">Message: </label>
      <textarea
        className={contactInfo.message ? "conMessage messageIncomplete" : "conMessage"}
        type="text"
        name="message"
        placeholder={contactInfo.message ? "Please add Message" : null}
        value={emailInfo.message}
        onChange={handleChange}
      />
      <label className="formInfo">Email:
      <input
        className={contactInfo.email ? "conEmail formIncomplete" : "conEmail"}
        type="email"
        name="user_email"
        value={emailInfo.user_email}
        placeholder={contactInfo.email ? "Please add Email" : null}
        onChange={handleChange}
      />
      </label>
      <button className="emailFormButton" type="submit" value="Send">
      {/* <FontAwesomeIcon  icon={faEnvelope} size="5x" /> */}
     <strong>Send</strong>
      </button>  
    </form>
    <Links linkBox="contactLinks" />
    </div>
  );
}

export default Email;
