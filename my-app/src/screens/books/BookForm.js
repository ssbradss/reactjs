import React, {useEffect, useState} from "react";
import AppButton from "../../components/AppButton";
import {create, update} from "../../services/book";

export default function BookForm({book}) {
  const [booktitle, setBookTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pagecount, setPageCount] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [publishdate, setPublishDate] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (book) {
      setBookTitle(book.Title);
      setDescription(book.Description);
      setPageCount(book.PageCount);
      setExcerpt(book.Excerpt);
      setPublishDate(book.PublishDate);
    }
  }, [book]);

  const save = async () => {
    if (booktitle === '' || description === '') {
      alert('Bookname or description is empty!');
      return;
    }
    setLoading(true);
    if (book) {
      await update({
        ID: book.ID,
        BookTitle: booktitle,
        Description: description
      });
    } else {
      await create({
        BookTitle: booktitle,
        Description: description
      });
    }
    setLoading(false);
    alert(`Book ${book ? 'updated' : 'created'}`);
  };

  return (
    <div>
      <label htmlFor="id">
        ID
      </label>
      <input name='id' disabled value={book?.ID || ''} /><br></br>

      <label htmlFor="booktitle">
        BookTitle
      </label>
      <input name='booktitle' value={booktitle} onChange={event => setBookTitle(event.target.value)} /><br></br>

      <label htmlFor="description">
        Description
      </label>
      <input name='description' value={description} onChange={event => setDescription(event.target.value)} /><br></br>

      <label htmlFor="pagecount">
        PageCount
      </label>
      <input name='pagecount' value={pagecount} onChange={event => setPageCount(event.target.value)} /><br></br>

      <label htmlFor="excerpt">
        Excerpt
      </label>
      <input name='excerpt' value={excerpt} onChange={event => setExcerpt(event.target.value)} /><br></br>

      <label htmlFor="publishdate">
        PublishDate
      </label>
      <input name='publishdate' value={publishdate} onChange={event => setPublishDate(event.target.value)} />

      <br/>
      <br/>
      <br/>
      <AppButton loading={loading} text='Save' onClick={() => save()}/>
    </div>
  );
} 