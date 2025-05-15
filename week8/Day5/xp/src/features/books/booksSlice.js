import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
    { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 3, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 4, title: 'It', author: 'Stephen King', genre: 'Horror' },
    { id: 5, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
    { id: 6, title: 'Foundation', author: 'Isaac Asimov', genre: 'Science Fiction' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
