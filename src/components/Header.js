import React from 'react'

function Header(props) {
    console.warn('Header', props.HeadercartData.cartData.length)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{ props.HeadercartData.cartData.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt='cart-img'/>
                <span className='cart-count' id='cart-count'>{ props.HeadercartData.totalPrice}</span>
            </div>
        </div>
    )
}

export default Header