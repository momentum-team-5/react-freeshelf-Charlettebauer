import React from 'react'
import './App.css'
import books from './books.json'
import Book from './component/Books'

function App () {
  return (
    <div className='App'>
      {books.map((book, key) =>
        <Book book={book} key={key} />
      )}
    </div>
  )
}

export default App
