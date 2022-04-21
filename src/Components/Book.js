import React from 'react'
import {PropTypes} from 'prop-types'

let Book = (props) =>{

const book = props.book
let change_bookShelf = (e) => {
  props.onUpdate(e.target.value)
}

return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`
          }}></div>
          <div className="book-shelf-changer">
            <select onChange={change_bookShelf} value={book.shelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default Book;
