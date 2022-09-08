import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = "The great adventures of Sherlock Holmes"
  const author = "Sir Arthur Conan Doyle"
  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/81woD8f1t7L._AC_UL640_FMwebp_QL65_.jpg" alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4> 
    </article>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'))
