import React from 'react'
import Book from './Book'
import {PropTypes} from 'prop-types'

let BookShelf = (props) =>{
  
const books = props.books
let update_book = (book, shelf) => {
props.onChangeShelf(book, shelf)
}

return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, index) => (<Book book={book} key={index} onUpdate={(shelf) => {
            update_book(book, shelf)
          }}/>))}
        </ol>
      </div>
    </div>
  )
}
  
BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf;
