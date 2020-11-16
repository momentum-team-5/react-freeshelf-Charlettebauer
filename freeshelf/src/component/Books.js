import React, { useState } from 'react'

export default function Book (props) {
  const { book } = props

  const [readMore, setReadMore] = useState(false)

  return (
    <div className='Book'>
      <h2>{book.title}</h2>
      <div><img
        style={{
          height: '150px',
          float: 'right'
        }} src={book.coverImageUrl}
           />
      </div>
      <div>Author: {book.author}</div>
      <p>{book.shortDescription}</p>
      <button onClick={() => setReadMore(!readMore)}>
        {readMore ? 'Hide more info' : 'Show more info'}
      </button>
      {readMore && (
        <div>
          <div>URL: <a href={book.url}>{book.url}</a></div>
          {book.publicationDate && <div>Publication date: {book.publicationDate}</div>}
          {book.publisher && <div>Publisher: {book.publisher}</div>}
          <p>More about this book: {book.detailedDescription}</p>
        </div>
      )}
    </div>
  )
}
