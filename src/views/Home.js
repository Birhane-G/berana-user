import React, {useState} from "react";
import srca from "../assets/bg/mp4/bg.mp4";
import "../assets/css/home.css";
import logo from "../assets/bg/images/logo-symbol.png";
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

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  return (
    <div>
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
            <div className="user-input">
              <input
                type="text"
                placeholder="Enter email address..."
                aria-label="Enter email address..."
                autofocus
              />
              <br />
              <div className="select-container">
                <select onChange={handleSelect}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
