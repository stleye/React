import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css';

const firstBook = {
  title: "The great adventures of Sherlock Holmes",
  author: "Sir Arthur Conan Doyle",
  img: "https://m.media-amazon.com/images/I/81woD8f1t7L._AC_UL640_FMwebp_QL65_.jpg" 
}

const secondBook = {
  title: "Murder in Orient Express",
  author: "Agatha Christie",
  img: "https://images-na.ssl-images-amazon.com/images/I/51rBuKf4IcL.jpg" 
}

function BookList() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.title}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.title}/>
    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt=''/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4> 
    </article>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'))
