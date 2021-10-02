import React from "react";
import Slider from "./components/Slider";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Slider}></Route>
        <Route exact path="/home"><Home></Home></Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
