import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";
import { useToggle } from "react-use";
import "../styles/ChatbotLandingPage.css";

import Logo from "../immagini/logo-saep-informatica-light-r 2.png";
import Mano from "../immagini/mano.png";
import ImageLight from "../immagini/image.png"; 
import ImageDark from "../immagini/immagineDark.png";

export default function ChatbotLandingPage() {
  const navigate = useNavigate();
  const [isChecked, toggleChecked] = useToggle(false);
  const [backgroundImage, setBackgroundImage] = useState(ImageLight); 

  const handleChange = (checked) => {
    toggleChecked(checked);
    document.body.classList.toggle("dark-mode", checked);
    setBackgroundImage(checked ? ImageDark : ImageLight);
  };

  const navigateToIntro = () => {
    navigate("/intro");
  };

  return (
    <div className={`chatbot-containerBackground ${isChecked ? "dark-mode" : ""}`}>
      <div
        className="chatbot-containerContent"
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      >
        <div className="chatbot-header">ELi</div>
        <div className="chatbot-description">
          Il nostro chatbot offre risposte rapide e precise in qualsiasi momento.
        </div>
        <div className="chatbot-buttons">
          <button className="chat-button" onClick={navigateToIntro}>
            Chat con ELi
          </button>
        </div>
        <div className="chatbot-mainImage">
          <img src={Mano} alt="Immagine principale" className="main-image" />
        </div>
        <div className="chatbot-footer">
          <div className="chatbot-footer-left">
            <Switch
              checked={isChecked}
              onChange={handleChange}
              onColor="#333"
              offColor="#fff"
              onHandleColor="#031B59"
              offHandleColor="#000222"
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={30}
              height={20}
              width={48}
              className="react-switch"
              uncheckedHandleIcon={
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    width="16"
                    height="16"
                  >
                    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
                    <line x1="12" y1="1" x2="12" y2="3" stroke="white" strokeWidth="2" />
                    <line x1="12" y1="21" x2="12" y2="23" stroke="white" strokeWidth="2" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="white" strokeWidth="2" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="white" strokeWidth="2" />
                    <line x1="1" y1="12" x2="3" y2="12" stroke="white" strokeWidth="2" />
                    <line x1="21" y1="12" x2="23" y2="12" stroke="white" strokeWidth="2" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="white" strokeWidth="2" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              }
              checkedHandleIcon={
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    width="16"
                    height="16"
                  >
                    <path
                      stroke="white"
                      strokeWidth="2"
                      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                    />
                  </svg>
                </div>
              }
            />
          </div>
          <div className="chatbot-footer-right">
            <img src={Logo} alt="Logo Aziendale" className="icon2" />
          </div>
        </div>
      </div>
    </div>
  );
}
