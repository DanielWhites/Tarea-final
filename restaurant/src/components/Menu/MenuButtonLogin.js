import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const MenuButtonLogin = () => {
  return (
    <>
      <div className="buttonLarge">
      <NavLink
            to="/login"
          >
            Iniciar sesión
          </NavLink>
      </div>
    </>
  );
};

export default MenuButtonLogin;
