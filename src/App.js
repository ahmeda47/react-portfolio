import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="nav-wrapper">
        <NavTabs />
        <Route exact path="/react-portfolio" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
