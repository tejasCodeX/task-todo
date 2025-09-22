import React from "react";
import Logo from "../assets/wsa-logo.svg";

const Header = () => {
  return (
    <div className="header-container-div">
      <img src={Logo} alt="WSA Logo" height={62} width={182} />
    </div>
  );
};

export default Header;
