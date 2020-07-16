import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import s from "./App.module.css";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/projects" component={ProjectList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
