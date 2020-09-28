import React, {useEffect, useState} from "react";
import {all, remove} from "../../../services/book";
import Item from "./Item";
import './index.css';

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    setBooks(await all());
  };

  const onDelete = async (book) => {
    const confirm = window.confirm(`Do you want to delete ${book.Title}`);
    if (confirm) {
      await remove(book.ID);
      alert(`${book.Title} deleted!`);
    }
  };

  return (
    <div className='container'>
      <h3>List</h3>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>BookTitle</th>
          <th>Description</th>
          <th>PageCount</th>
          <th>Excerpt</th>
          <th>PublishDate</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
  {books.length > 0 && books.map(book => <Item key={book.ID} book={book} onDelete={() => onDelete(book)}/>)}
        </tbody>
      </table>
    </div>
    );
}