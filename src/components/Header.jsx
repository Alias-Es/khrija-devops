import React from "react";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src="/images/instagram-icon.png" alt="Instagram" className="social-icon" />
        <img src="/images/tiktok-icon.png" alt="TikTok" className="social-icon" />
      </div>
      <h1 className="logo">KHRIJA</h1>
    </header>
  );
}

export default Header;
