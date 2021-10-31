import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Settings from "./Settings";
import Login from "./Login";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./themes"; 
import Register from "./Register";

function App() {
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/settings">
            <Header />
              <Settings />
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
