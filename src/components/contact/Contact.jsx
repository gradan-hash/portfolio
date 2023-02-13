import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cu1orye",
        "template_zu9ezmk",
        formRef.current,
        "e4nxefx6dZ0-3g9xQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +254796881039
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              P.O. BOX 136 – 90100, Machakos County
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              corneliusmutuku55@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <p>
              <b>Whats your story?</b>Get in touch .Always freelancing if the
              right project comes along.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />

              <textarea
                rows="5"
                placeholder="message"
                name="message"
                style={{ backgroundColor: darkMode && "#333" }}
              />
              <button>Submit</button>
              {done && <p>Thank you...</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
