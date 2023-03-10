import React, { useState } from "react";
import srca from "../assets/bg/mp4/bg.mp4";
import "../assets/css/home.css";
import logo from "../assets/bg/images/logo-symbol.png";
import axios from "axios";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Home = () => {
  const options = [
    {
      label: "LinkedIn",
      value: "linkedin",
    },

    {
      label: "Telegram",
      value: "telegram",
    },

    {
      label: "Instagram",
      value: "instagram",
    },

    {
      label: "Others",
      value: "others",
    },
  ];

  const [value, setValue] = useState("");
  const [Email, setEmail] = useState("");
  // const [msg, setmsg] = useState("");

  const handleSelect = (e) => {
    // console.log(value)
    setValue(e.target.value);
    const tar = document.getElementById("userToSpacify");
    if (e.target.value === "others") {
      tar.style.display = "block";
    } else {
      tar.style.display = "none";
    }
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/userReg", { email: Email });
    } catch (error) {
      // console.log(response);
    }
  };

  return (
    <div className="master-container">
      <div className="Top-background"></div>
      <video
        src={srca}
        className="background-video"
        type="video/mp4"
        autoPlay
        loop
      />
      <div>
        <div>
          <div className="left-top-contents"></div>
          <div className="contents">
            <div className="text">
              <h1>BERANA</h1>
              <div className="Berana-logo">
                <img src={logo} alt="Berana Logo" />
              </div>
              <p>... coming soon ...</p>
              <div className="Berana-text">
                <h4>
                  We're working hard to finish the development of Berana. Sign
                  up below to be one of the first to help us beta test.
                </h4>
              </div>
            </div>
            <div className="user-input-container">
              <div className="user-input">
                <form onSubmit={sendData}>
                  <span>*Email Address</span>
                  <input
                    type="email"
                    placeholder="Enter email address..."
                    aria-label="Enter email address..."
                    onChange={(e) => setEmail(e.target.value)}
                    autofocus
                  />
                  <br />
                  <div className="select-container">
                    <span>*From where Did You heared about us?</span>
                    <select onChange={handleSelect}>
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                  <div id="userToSpacify">
                    <span>*please tell us</span>
                    <textarea rows="3" />
                  </div>

                  <button className="btn" type="submit">
                    Subscribe
                  </button>

                  <div className="Investment-text">
                    <a
                      href="https://view.genial.ly/61e401e91c84d80cf4d99f2f/presentation-berana-pitch-deck"
                      target="_blank"
                    >
                      INVESTMENT DECK
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <div className="icons">
          <a href="https://www.facebook.com/profile.php?id=100070065453500">
            <FaFacebookF
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </a>
          <a href="https://www.instagram.com/berana_audiobooks/">
            <FaInstagram
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
