import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isBlack, setIsBlack] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsBlack(true);
    } else {
      setIsBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav ${isBlack ? "black" : ""}`}>
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="logo"
      />

      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="avatar"
      />
    </div>
  );
};

export default Nav;
