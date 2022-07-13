import { Grid } from "@mui/material";
import React from "react";
import MenuButtonLogin from "../Menu/MenuButtonLogin";
import MenuNav from "../../components/Menu/MenuNav";
import MenuPhone from "../../components/Menu/MenuPhone";
import Logo from "../../images/logo.png";

export const Nav = () => {
  return (
    <>
      <Grid item xs={2}>
        <img src={Logo} alt="logo" loading="lazy" className="logo" />
      </Grid>
      <Grid item xs={6}>
        <nav>
          <MenuNav />
        </nav>
      </Grid>
      <Grid item xs={2}>
        <MenuPhone />
      </Grid>
      <Grid item xs={2}>
        <MenuButtonLogin/>
      </Grid>
    </>
  );
};
