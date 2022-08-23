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
import ListListAdm from "./pages/listListAdm/ListListAdm";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import Movie1 from "./pages/movie/Movie";

import { Movie } from "@material-ui/icons";
import NewMovie from "./pages/newMovie/NewMovie";
import { ContextAuth } from "./context/ContextAuth/ContextAuth";

function App() {
  const { user } = useContext(ContextAuth);
  console.log("user is ", user)
  return (
    <Router>
      <Switch>
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              {/* <Home /> */}
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/users">
              {user ? <UserList />: <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/movies">
              {user ? <MovieList />: <Redirect to="/login" />}
            </Route>
            <Route exact path="/lists">
              {user ? <ListListAdm />: <Redirect to="/login" />}
            </Route>
            <Route path="/list/:listId">
              {user ? <List />: <Redirect to="/login" />}
            </Route>
            <Route exact path="/newMovie">
              {user ? <NewMovie />: <Redirect to="/login" />}
            </Route>
            <Route path="/movie/:movieId">
             {user ?  <Movie1 />: <Redirect to="/login" />}
            </Route>
            <Route exact path="/newList">
              {user ?  <NewList />: <Redirect to="/login" />}
            </Route>


          </div>
        </>

      </Switch>
    </Router>

  );
}

export default App;
