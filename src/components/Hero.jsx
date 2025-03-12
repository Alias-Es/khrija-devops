import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>
          <span className="highlight"> KHREJ FWEJ</span> STAFD MN A7SAN{" "}
          <span className="highlight"> LES PROMOS F RABAT!</span> <br />
          <br /> <span className="highlight"> !أنت لست شجرة </span>
        </h2>
        <div className="image-button-container">
          <img src="/images/iphone1.png" className="khrija-logo" alt="KHRIJA Logo" />
          <a href="https://www.example.com">
            <img src="/images/googleplay.png" alt="Google Play" style={{ width: "190px", height: "60px" }} />
          </a>
          <a href="https://www.example.com">
            <img src="/images/appstore.png" alt="App Store" style={{ width: "190px", height: "60px" }} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
