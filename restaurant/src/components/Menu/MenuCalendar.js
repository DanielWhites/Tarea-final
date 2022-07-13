import { Grid } from "@mui/material";
import React from "react";

const MenuCalendar = () => {
  return (
    <>
      <Grid container>
        <Grid item md={8}></Grid>
        <Grid item md={2}>
          <p className="calendar">Open Time</p>
        </Grid>
        <Grid item md={2}>
          <p className="calendar">Sunday - Friday</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={8}></Grid>
        <Grid item md={1}>
          <p className="calendarTime">
            Brunch
            <br /> 11:00–12:00
          </p>
        </Grid>
        <Grid item md={1}>
          <p className="calendarTime">
            Lunch
            <br /> 13:00–17:00
          </p>
        </Grid>
        <Grid item md={2}>
          <p className="calendarTime">
            Dinner
            <br /> 18:00–20:00
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default MenuCalendar;
