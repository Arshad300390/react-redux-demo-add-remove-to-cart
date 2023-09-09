import React from 'react'

function Home(props) {
  console.warn('home')
  return (
    <div className="cart-wrapper">
      <h1>Home Component</h1>
      {/* <div className="add-to-cart">
        <span className="cart-count">{props.cartData.cartItems.totalPrice}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt='cart-img' />
      </div> */}
      <div className="img-wrapper item">
        <img src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png" alt="iphone-img" />
      </div>
      <div className="text-wrapper item">
        <span>
          I-Phone
        </span>
        <span>
          Price: $1000.00
        </span>
      </div>
      <div className="btn-wrapper item">
        <button onClick={() =>
          props.addToCartHandler({ price: 1000, name: 'i-phone 11' }
          )}>Add To Cart</button><br /><br />
        <button onClick={() =>
          props.removeToCartHandler(
          )}>Remove To Cart</button>
      </div>
    </div>
  )
}

export default Home