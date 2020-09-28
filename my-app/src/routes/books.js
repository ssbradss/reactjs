import React from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import BookList from "../screens/books/list";
import CreateBook from "../screens/books/create";
import EditBook from "../screens/books/edit";

export default function Books() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Books</h2>
      <ul>
        <li>
          <Link to={`${url}`}>List</Link>
        </li>
        <li>
          <Link to={`${url}/create`}>Create</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <BookList />
        </Route>
        <Route path={`${path}/create`}>
          <CreateBook />
        </Route>
        <Route path={`${path}/edit/:bookId`}>
          <EditBook />
        </Route>
      </Switch>
    </div>
  );
}