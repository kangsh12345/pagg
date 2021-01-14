import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import MultiSearchPage from "./views/MultiSearchPage/MultiSearchPage";
import LiveTrollPage from "./views/LiveTrollPage/LiveTrollPage";
import UserReportPage from "./views/UserReportPage/UserReportPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/multisearch" component={MultiSearchPage} />
          <Route exact path="/livetroll" component={LiveTrollPage} />
          <Route exact path="/userreport" component={UserReportPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
