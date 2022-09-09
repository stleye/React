import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css';

const books = [
  {
    id: 1,
    title: "The great adventures of Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    img: "https://m.media-amazon.com/images/I/81woD8f1t7L._AC_UL640_FMwebp_QL65_.jpg" 
  }, 
  {
    id: 2,
    title: "Murder in Orient Express",
    author: "Agatha Christie",
    img: "https://images-na.ssl-images-amazon.com/images/I/51rBuKf4IcL.jpg" 
  }, 
  {
    id: 3,
    title: "A Study in Scarlet",
    author: "Sir Arthur Conan Doyle",
    img: "https://m.media-amazon.com/images/I/41glYhCj0DL.jpg"
  }
]

function BookList() {
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

const Book = (props) => {
  const { img, author, title } = props.book
  const clickHandler = () => {
    alert('hello world')
  }
  return (
    <article className="book" onMouseOver={ () => {
      console.log(title)
    }}>
      <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4> 
      <button type="button" onClick={clickHandler}>reference example</button>
    </article>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'))
