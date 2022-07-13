import { Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Entrada from "../../images/img-1.png";
import EntradaDos from "../../images/img-2.png";

const PlateOne = () => {
  const path = "https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod";
  const [entradas, setEntradas] = useState([]);
  const [fondos, setFondos] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  useEffect(() => {
    apiPlates();
  }, []);

  const apiPlates = async () => {
    const jugos = "jugos-bebidas";
    console.log("Una sóla vez");
    const response = await fetch(`${path}/api/menus`);
    const res = await response.json();
    console.log(res);
    setEntradas(res.entradas);
    setFondos(res.fondo);
    setBebidas(res.jugos);

    console.log(res[6]);
  };

  return (
    <>
      <Grid container>
        <Grid container>
          <Grid item md={12}>
            <p className="titlePlate">Entradas</p>
            <p className="subTitlePlate">
              This is a section of your menu. Give your section a brief
              description
            </p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6}>
            <img className="plateImg" src={Entrada}></img>
          </Grid>
          <Grid item md={6}>
            {entradas.slice(0, 3).map((entrada) => (
              <span key={entrada.id}>
                <p className="pateCost"> ${entrada.price}</p>
                <p className="plateTitle"> {entrada.name} </p>
                <p className="plateSubTitle">{entrada.description}</p>
              </span>
            ))}
            <div className="plateButtonLargeDark">
              <Button
                variant="outlined"
                size="large"
                className="plateButtonDark"
              >
                Ver más
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid container>
          <Grid item md={12}>
            <p className="titlePlate">Fondos</p>
            <p className="subTitlePlate">
              This is a section of your menu. Give your section a brief
              description
            </p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6}>
            {fondos.slice(0, 3).map((fondo) => (
              <span key={fondo.id}>
                <p className="pateCost"> ${fondo.price}</p>
                <p className="plateTitle"> {fondo.name} </p>
                <p className="plateSubTitle">{fondo.description}</p>
              </span>
            ))}
            <div className="plateButtonLargeDark">
              <Button
                variant="outlined"
                size="large"
                className="plateButtonDark"
              >
                Ver más
              </Button>
            </div>
          </Grid>
          <Grid item md={6}>
            <img className="plateImgRight" src={EntradaDos}></img>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PlateOne;
