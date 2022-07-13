import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Home/Index";
import Login from "../pages/Login/Login";
import Order from "../pages/Order/Order";
import User from "../pages/User/User";

export default function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Index />
            </>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route exact path="/pedidos" element={<><Order/></>} />
        <Route exact path="/usuarios" element={<><User/> </>} />
      </Routes>
    </Router>
  );
}
