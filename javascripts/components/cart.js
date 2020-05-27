import utils from '../helpers/utils.js'
import cartData from '../helpers/data/cartData.js'

const cartToDom = () => {
  const myCart = cartData.getCart();
  let domString = ``;
  for (let i=0; i< myCart.length; i++){
    const cartItem = myCart[i]
    domString += `
    <h3>${cartItem.title}</h3>
    `
  }

  utils.printToDom('#cart', domString)
}

const addToCart = (newBook) =>{
  cartData.setCart(newBook);
  cartToDom();
}

export default { addToCart}
