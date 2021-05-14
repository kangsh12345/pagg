import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import ForgotPasswordPage from "./views/LoginPage/ForgotPassword"
import RegisterPage from "./views/RegisterPage/RegisterPage";
import MultiSearchPage from "./views/MultiSearchPage/MultiSearchPage";
import LiveTrollPage from "./views/LiveTrollPage/LiveTrollPage";
import UserReportPage from "./views/UserReportPage/UserReportPage";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import Match from "./views/Match/Match";
import Game from "./views/Game/Game";
import MatchInGame from "./views/MatchInGame/MatchInGame";
import ReportPage from "./views/UserReportPage/ReportPage/ReportPage"
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/multisearch" component={MultiSearchPage} />
          <Route exact path="/livetroll" component={LiveTrollPage} />
          <Route exact path="/userreport" component={UserReportPage} />
          <Route exact path="/match" component={Match} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/matchingame" component={MatchInGame} />
          <Route exact path="/ReportPage" component={ReportPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
