import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Checkout from "./Checkout/Checkout";
import Settings from "./Settings/Settings";
import Login from "./Login/Login";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./themes/themes"; 
import Register from "./Register/Register";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import About from "./About/About";
import Menu from "./Menu/Menu";
import HeaderClose from "./Header/HeaderClose";

const promise = loadStripe("pk_test_51IBzz3CCd7GXDkwRVKgyq3dVpSWe00IDYSe9C4PewrtgiAovJmOrFEGDfzGF7fDDzzDASBfQmN5T7OvDPSu3ttPp004wDHUjb9");
function App() {

  const [{_}, dispatch] = useStateValue();
  console.log(_);
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  const [ theme, setTheme ] = useState("light");
  console.log(setTheme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
            <Header />
            <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>              
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Header /> 
              <Register />
            </Route>
            <Route path="/settings">
            <Header />
              <Settings />
            </Route>
            <Route path="/about">
            <Header />
              <About />
            </Route>
            <Route path="/menu">
              <HeaderClose />
              <Menu />
            </Route>
            <Route path="/">
            <Header />
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
