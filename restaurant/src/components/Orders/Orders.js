import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import arrow from "../../images/arrow.png";
import avatar from "../../images/avatar.png";

const Orders = () => {
  const [token, setToken]=useState('')
  const path = "https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod";

  useEffect(() => {
    // const items = JSON.parse(localStorage.getItem("items"));
    // console.log("prueba: ", items);
    const jwt = localStorage.getItem('items');
    console.log(jwt);
    // if(!items){
    //   setToken(items);
    // }
    apiOrders();
  }, []);

  const apiOrders = async () => {

    const response = await fetch('${path}/api/orders', { 
      method: 'get', 
      headers: new Headers({
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/x-www-form-urlencoded'
      })
  });


   // (`${path}/api/orders`);
    const res = await response.json();
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <Grid container className="orderUser">
            <Grid item md={1}>
              <Stack direction="row">
                <Avatar src={avatar} />
              </Stack>
            </Grid>

            <Grid item md={2}>
              Dua Lipa
            </Grid>

            <Grid item md={3}>
              October 17,2021
            </Grid>

            <Grid item md={2}>
              3:33 pm
            </Grid>

            <Grid item md={2}>
              ID: 325
            </Grid>
          </Grid>

          <Grid container>
            <Grid item md={12} className="orderTitle">
              Prueba
            </Grid>

            <Grid item md={12}>
              <p>Papas Bravas: 1</p>
              <p>Nizarda: 2</p>
            </Grid>

            <Grid item md={12} className="orderLink">
              Marcar como entregada <img className="orderArrow" src={arrow} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={5}>
          <Grid container className="orderUser">
            <Grid item md={1}>
              <Stack direction="row">
                <Avatar src={avatar} />
              </Stack>
            </Grid>

            <Grid item md={2}>
              Dua Lipa
            </Grid>

            <Grid item md={3}>
              October 17,2021
            </Grid>

            <Grid item md={2}>
              3:33 pm
            </Grid>

            <Grid item md={2}>
              ID: 325
            </Grid>
          </Grid>

          <Grid container>
            <Grid item md={12} className="orderTitle">
              Prueba
            </Grid>

            <Grid item md={12}>
              <p>Papas Bravas: 1</p>
              <p>Nizarda: 2</p>
            </Grid>

            <Grid item md={12} className="orderLink">
              Marcar como entregada <img className="orderArrow" src={arrow} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Orders;
