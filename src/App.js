import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Error from "./components/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
        <Navbar />
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route component={Error} />
        </Switch>
    </main>
  );
}

export default App;
