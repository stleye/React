import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css';
import { books } from './books.js'
import Book from './Book'
import {greeting} from './testing/testing.js'

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}/>
        )
      })}
    </section>
  )
}


ReactDOM.render(<BookList/>, document.getElementById('root'))
