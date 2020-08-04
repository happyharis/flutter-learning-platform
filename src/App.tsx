import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/signup" component={SignUpPage}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
