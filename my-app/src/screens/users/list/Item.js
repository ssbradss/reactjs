import React from "react";
import {all, remove} from "../../../services/book";

const onDelete = async (user) => {
  const confirm = window.confirm(`Do you want to delete ${user.UserName}`);
  if (confirm) {
    await remove(user.ID);
    alert(`${user.UserName} deleted!`);
  }
};

export default function Item({user}) {
  return (
    <tr>
      <td>{user.ID}</td>
      <td>{user.UserName}</td>
      <td>{user.Password}</td>
      <td><button onClick={() => onDelete(user)}>Del</button></td>
    </tr>
  );
}