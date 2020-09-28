import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {get} from "../../../services/book";
import BookForm from "../BookForm";

export default function EditBook() {
  const {bookId} = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook();
  }, [bookId]);

  const getBook = async () => {
    if (bookId) {
      setBook(await get(bookId));
    }
  };

  return (
    <div>
      <BookForm book={book} />
    </div>
  );
}