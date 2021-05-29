import React from "react";
import "./homepage.styles.scss";
import MenuItem from "../components/menu-item/Menu-item";
import Directory from "../components/directory/Directory";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </Directory>
    </div>
  );
};

export default Homepage;
