import React, { useState , useEffect, useDebugValue} from "react";
import Links from "./Links";
import emailjs from "emailjs-com";
import Pass from "../config/config";
// import{ init } from 'emailjs-com';
// init("user_mvQp572NHdayaoTqbrMUs")
import ReCAPTCHA from "react-google-recaptcha";

// useEffect(()=>{
//   const scriptTag = document.createElement("script");
//   scriptTag.src = "https://www.google.com/recaptcha/api.js";
//   scriptTag.setAttribute("async");
//   scriptTag.setAttribute("defer");
//   scriptTag.addEventListener("load", () => {
//     document.body.appendChild(scriptTag);
//       grecaptcha.render('html_element', {
//         'sitekey' : '6Ldr87MaAAAAAE0vXzE_14xfU9PyiRO-O2d8RZcn'
//   })
// })
// });

function onChange(value) {
  console.log("Captcha value:", value);
}

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
      e.preventDefault();
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
    .init("user_mvQp572NHdayaoTqbrMUs")
    .sendForm(Pass().serviceId, Pass().templateId, e.target, "user_mvQp572NHdayaoTqbrMUs")
      .then(
        (result) => {
          // console.log(result.text);
           console.log(result.status)
           console.log("email sent")
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

    if (emailInfo.user_name === "" || emailInfo.message === "" || emailInfo.user_email === "") {
      setContactInfo({
        name: true,
        message: true,
        email: true
      })
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
    <ReCAPTCHA
    sitekey="6Ldr87MaAAAAAE0vXzE_14xfU9PyiRO-O2d8RZcn"
    onChange={onChange}
  />
    <Links linkBox="contactLinks" />
    </div>
  );
}

export default Email;
