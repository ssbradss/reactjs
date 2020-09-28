import React from "react";
import {all, remove} from "../../../services/book";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";

const onDelete = async (book) => {
  const confirm = window.confirm(`Do you want to delete ${book.Title}`);
  if (confirm) {
    await remove(book.ID);
    alert(`${book.Title} deleted!`);
  }
};

export default function Item({book}) {
  let { path, url } = useRouteMatch();
  return (  
    <tr>
      <td>{book.ID}</td>
      <td>{book.Title}</td>
      <td>{book.Description}</td>
      <td>{book.PageCount}</td>
      <td>{book.Excerpt}</td>
      <td>{book.PublishDate}</td>
      <td><button onClick={() => onDelete(book)}>Del</button>
      <Link to={`${url}/edit/` + book.ID}>Edit</Link>
      </td>
    </tr>
  );
}