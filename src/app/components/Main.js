'use client'; // Make sure this is a Client Component

import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { TbHomeSearch } from "react-icons/tb";
import { GiTrade } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { MdOutlinePets, MdOutlinePiano } from "react-icons/md";
import { FaRedhat } from "react-icons/fa"; // Using FaTshirt instead of FaShirt
import { FaShirt } from "react-icons/fa6";
import Fab from "@mui/material/Fab"; // Import Fab for the floating button
import Stack from "@mui/material/Stack"; // Import Stack for Flexbox layout
import { PiPantsBold } from "react-icons/pi";
import { GiSonicShoes } from "react-icons/gi";
import { FaDrum } from "react-icons/fa6";

function Main() {
  const [value, setValue] = React.useState(0);

  // Handle value change and trigger animation without routing
  const handleNavigation = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="wrapper">
      {/* Group the floating buttons on the right side */}
      <Stack
        direction="column" // Change direction to column for vertical stacking
        spacing={2} // Space between buttons
        className="floating-buttons floating-button-right"
      >
        <Fab aria-label="add" className="floating-button">
          <FaRedhat className="floating-button-icon" />
        </Fab>
        <Fab aria-label="add" className="floating-button">
          <FaShirt className="floating-button-icon" />
        </Fab>
        <Fab aria-label="add" className="floating-button">
          <PiPantsBold className="floating-button-icon" />
        </Fab>
        <Fab aria-label="add" className="floating-button">
          <GiSonicShoes className="floating-button-icon" />
        </Fab>
      </Stack>

      {/* Group the floating buttons on the left side */}
      <Stack
        direction="column" // Change direction to column for vertical stacking
        spacing={2} // Space between buttons
        className="floating-buttons floating-button-left"
      >
        <Fab aria-label="add" className="floating-button">
          <MdOutlinePiano className="floating-button-icon" />
        </Fab>
        <Fab aria-label="add" className="floating-button">
          <FaDrum className="floating-button-icon" />
        </Fab>
      </Stack>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
        className="bottom-navigation"
      >
        <BottomNavigationAction
          label="Home Visit"
          icon={<TbHomeSearch />}
          className="bottom-navigation-action"
        />
        <BottomNavigationAction
          label="My Pet"
          icon={<MdOutlinePets />}
          className="bottom-navigation-action"
        />
        <BottomNavigationAction
          label="Trading"
          icon={<GiTrade />}
          className="bottom-navigation-action"
        />
        <BottomNavigationAction
          label="Settings"
          icon={<IoSettings />}
          className="bottom-navigation-action"
        />
      </BottomNavigation>
    </div>
  );
}

export default Main;
