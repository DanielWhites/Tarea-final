import { Grid } from "@mui/material";
import React, {useEffect} from "react";
import MenuBannerTitle from "../../components/Menu/MenuBannerTitle";
import { Nav } from "../../components/Nav/Nav";

import Orders from "../../components/Orders/Orders";

export default function Order() {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    console.log("prueba: ", items);
  }, []);
  return (
    <>
      <div className="Slider">
        <header className="bgOrder">
          <Grid container spacing={2}>
            <Nav />
            {/* título Banner */}

            <Grid item xs={12}>
              <MenuBannerTitle
                align="center"
                bannerTitle="Pedidos"
                bannerSubTitle=" "
              />
            </Grid>
          </Grid>
        </header>
      </div>

      <Grid container>
        <Grid item xs={12}>
          <section>
            <Orders />
          </section>
        </Grid>
      </Grid>

      {/* Form Order */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <section className="bgGreen">
            <Grid container>
              <Grid item md={12}>
                <p className="titlePlate marginTitleButton">Nuevo pedido</p>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={12}>
                <input
                  type="text"
                  className="inputForm"
                  placeholder="Mesa"
                  name="mesa"
                />
              </Grid>
            </Grid>

            <Grid container spacing={7}>
              <Grid item md={8}>
                <input
                  type="text"
                  className="inputForm"
                  placeholder="Producto"
                  name="producto"
                />
              </Grid>
              <Grid item md={4}>
                <input
                  type="text"
                  className="inputForm"
                  placeholder="Cantidad"
                  name="cantidad"
                />
              </Grid>
            </Grid>

            <Grid item md={12} className="itemCenter">
              <button className="accessaddproducts">
                Agregar más productos
              </button>
            </Grid>

            <Grid item md={12} className="itemCenter">
              <button className="accesscreate">Crear Pedido</button>
            </Grid>
          </section>
        </Grid>
      </Grid>
    </>
  );
}
