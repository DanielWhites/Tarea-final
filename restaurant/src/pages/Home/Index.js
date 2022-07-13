import { Grid } from "@mui/material";
import React from "react";
import MenuButtonLogin from "../../components/Menu/MenuButtonLogin";
import MenuNav from "../../components/Menu/MenuNav";
import MenuBannerTitle from "../../components/Menu/MenuBannerTitle";
import MenuPhone from "../../components/Menu/MenuPhone";
import Logo from "../../images/logo.png";
import MenuCalendar from "../../components/Menu/MenuCalendar";
import PlateOne from "../../components/Plates/PlateOne";

export default function Index() {
  return (
    <>
      <div className="Slider">
        <header className="bgHome">
          <Grid container spacing={2}>
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
              <MenuButtonLogin />
            </Grid>

            {/* título Banner */}

            <Grid item xs={12}>
              <MenuBannerTitle
                align="left"
                bannerTitle="Menú"
                bannerSubTitle="Conoce nuestra variada carta"
              />
            </Grid>

            {/* Calendar */}
            <MenuCalendar />
          </Grid>
        </header>
      </div>
      {/* Plates */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <section>
            <PlateOne />
          </section>
        </Grid>
      </Grid>
    </>
  );
}
