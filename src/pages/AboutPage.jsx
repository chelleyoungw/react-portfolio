import React from "react";

import portraitImg from "../assets/img/profile-pic.png";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-content-container">
        <h1>About Me</h1>
        <p>Vet med chick going programmer chic!</p>
        <img src={portraitImg} alt="Chelle Wood Profile Pic" />
        <p>
          This Texas girl is ready for a new adventures in programming technology.
        </p>
      </div>
    </div>
  );
}