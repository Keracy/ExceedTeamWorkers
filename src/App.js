import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import s from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/users" component={UserList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
