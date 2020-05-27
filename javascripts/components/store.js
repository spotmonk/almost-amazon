import bookData from '../helpers/data/bookData.js'
import utils from '../helpers/utils.js'

const addToCartEvent = (e) => {
  e.preventDefault();

  console.log('You Added the book to the cart!!')
}

const makeStore = () => {
  const bookInfo = bookData.getBook()

  const domString = `
    <h2>Our One Book</h2>
    <h3 id="book-price">$${bookInfo.price}</h3>
    <img class="book-image" src="${bookInfo.image}" alt="book cover"><br/>
    <button id="add-to-cart"class="btn btn-danger">Add to Cart</button>
  `

  utils.printToDom('#store', domString);
  document.querySelector("#add-to-cart").addEventListener('click', addToCartEvent)
}

export default { makeStore}
