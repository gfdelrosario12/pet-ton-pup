"use client"; // Make sure this is a Client Component

import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { TbHomeSearch } from "react-icons/tb";
import { GiTrade } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";
import { MdOutlinePets, MdOutlinePiano } from "react-icons/md";
import { FaRedhat } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import { PiPantsBold } from "react-icons/pi";
import { GiSonicShoes } from "react-icons/gi";
import { FaDrum } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";

function Main() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("Your Name");
  const [isEditing, setIsEditing] = useState(false);

  const handleNavigation = (newValue) => {
    setValue(newValue);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="wrapper">
      <div className="main-screen">
        {/* Floating buttons */}
        <Stack direction="column" spacing={2} className="floating-buttons floating-button-right">
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

        <Stack direction="column" spacing={2} className="floating-buttons floating-button-left">
          <Fab aria-label="add" className="floating-button">
            <MdOutlinePiano className="floating-button-icon" />
          </Fab>
          <Fab aria-label="add" className="floating-button">
            <FaDrum className="floating-button-icon" />
          </Fab>
        </Stack>

        {/* Name editing section */}
        <div className="name-container">
          {isEditing ? (
            <div className="edit-container">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="name-input"
              />
              <TiPencil onClick={toggleEditMode} className="pencil-icon save-icon" />
            </div>
          ) : (
            <div className="display-container">
              <p className="name-display">{name}</p>
              <TiPencil onClick={toggleEditMode} className="pencil-icon edit-icon" />
            </div>
          )}
        </div>
      </div>

      <div className="image-container">
        <img src="/assets/Meow.png" alt="Cat" />
      </div>

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
