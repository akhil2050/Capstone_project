import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";

import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import { Movie } from "@material-ui/icons";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
  return (
    <Router>
      <Switch>

        
        <div className="container">
          <Topbar />
          <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/movies">
            <MovieList />
          </Route>
          <Route exact path="/lists">
            <List />
          </Route>
          <Route exact path="/newMovie">
            <NewMovie />
          </Route>
          <Route exact path="/newList">
            <NewList />
          </Route>


        </div>

      </Switch>
    </Router>

  );
}

export default App;
