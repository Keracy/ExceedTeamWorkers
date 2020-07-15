import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import AddEmployee from "./components/UserList/AddEmployee/AddEmployee";
import store from "./components/redux/store/store";
import { Provider } from "react-redux";
import s from "./App.module.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" />
            <Route path="/users" component={UserList} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
