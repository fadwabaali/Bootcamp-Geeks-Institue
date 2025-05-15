import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../features/books/booksSelectors';

const genreMap = {
  All: selectBooks,
  Horror: selectHorrorBooks,
  Fantasy: selectFantasyBooks,
  'Science Fiction': selectScienceFictionBooks,
};

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const books = useSelector(genreMap[selectedGenre]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Book Inventory</h2>
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>

      <ul style={{ marginTop: '20px' }}>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} — <em>{book.genre}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
