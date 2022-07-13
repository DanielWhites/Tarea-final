import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuBannerTitle from "../../components/Menu/MenuBannerTitle";
import { Nav } from "../../components/Nav/Nav";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const history = useNavigate();
  const path = "https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod";

  const [items, setItems] = useState('');

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const apiLogin = async () => {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${path}/oauth/token`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: user,
        client_secret: password,
        audience: "https://escalab.academy",
        grant_type: "client_credentials",
      }),
    });
    const res = await response.json();

    if (res.error_description) {
      toast.error(
        `¿Tienes problema con tus credenciales?, por favor verifica e intenta nuevamente.`
      );
    } else {

      console.log("res ",res);
      setItems(res);
      toast.success(`Hola una vez más, ${user}`);
      //history('/pedidos');

    }
  };
  return (
    <>
      <div className="Slider">
        <header className="bgLogin">
          <Grid container spacing={2}>
            <Nav />
            {/* título Banner */}

            <Grid item xs={12}>
              <MenuBannerTitle
                align="left"
                bannerTitle="Iniciar Sesión"
                bannerSubTitle=" "
              />
            </Grid>
          </Grid>
        </header>
      </div>
      {/* Plates */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <section className="bgGreen">
            <Grid container>
              <Grid container>
                <Grid item md={12}>
                  <p className="titlePlate marginTitleButton">
                    Acceso Trabajadores
                  </p>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={12}>
                  <input
                    type="text"
                    className="inputForm"
                    placeholder="Usuario"
                    name="user"
                    id="user"
                    value="britney"
                  />
                </Grid>
                <Grid item md={12}>
                  <input
                    type="text"
                    className="inputForm"
                    placeholder="Contraseña"
                    name="password"
                    id="password"
                    value="britNEY"
                  />
                </Grid>
                <Grid item md={12} className="itemCenter">
                  <button className="access" onClick={() => apiLogin()}>
                    Acceder
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </section>
        </Grid>
      </Grid>
    </>
  );
}
