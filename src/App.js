import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "./components/layout";
import { AboutMe, Projects, Home, ContactMe } from "./components/pages";
import { Typing } from "./components/scripts";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/MarkForesterReact" component={Home}></Route>
            <Route path="/About" component={AboutMe}></Route>
            <Route path="/Projects" component={Projects}></Route>
            <Route path="/Contact" component={ContactMe}></Route>
          </Switch>
        </Layout>
      </Router>
      <Typing />
    </div>
  );
}

export default App;
