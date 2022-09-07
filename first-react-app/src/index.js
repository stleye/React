import React from 'react'
import ReactDOM from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}

const Image = () => <img src="https://m.media-amazon.com/images/I/81woD8f1t7L._AC_UL640_FMwebp_QL65_.jpg" alt=""/>
const Title = () => <h1>The great adventures of Sherlock Holmes</h1>
const Author = () => <h4>Sir Arthur Conan Doyle</h4>

ReactDOM.render(<BookList/>, document.getElementById('root'))
