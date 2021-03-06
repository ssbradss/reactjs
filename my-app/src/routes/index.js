import React, { useEffect, useState } from "react";
import Home from "../screens/home/";
import Users from "./users";
import Books from "./books";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import Login from "../screens/auths/login";
import AuthorizedRoute from "../hocs/AuthorizedRoute";
import { loginAction, logoutAction } from "../actions/authActions";

const useMount = (func) => useEffect(func, []);

export default function Routes() {
  const [authState, authDispatch] = useAuthContext();
  const [loaded, setLoaded] = useState(false);

  useMount(() => {
    const authStr = localStorage.getItem("auth");
    if (authStr) {
      const auth = JSON.parse(authStr);
      authDispatch(loginAction(auth));
    }
    setLoaded(true);
  });

  const handleLogout = () => {
    localStorage.removeItem('auth');
    authDispatch(logoutAction());
  };

  return loaded ? (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          {authState?.accessToken ? (
            <>
              <li>
                <span>Hi, {authState?.user?.userName ?? "guy"}</span>
              </li>
              <li>
                <button id="btn-logout" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <AuthorizedRoute path="/users">
            <Users />
          </AuthorizedRoute>
          <AuthorizedRoute path="/books">
            <Books />
          </AuthorizedRoute>
        </Switch>
      </div>
    </Router>
  ) : null;
}