import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image,title, price, rating,hideButton,}){
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
    <div className='checkoutPro'>
      <img className='checkoutPro_image' src={image}/>
      
    <div className='checkoutPro_info'>
        <p className='checkoutPro_title'>{title}</p>
        <p className='checkoutPro_price'>
        <small>₹</small>
        <strong>{price}</strong>
        </p>
        <div className='checkoutPro_rating'>
            {Array(rating)
                .fill()
                .map((_,i) => (
                    <span>⭐</span>
                ))}
            </div> 
            {!hideButton &&(<button onClick={removeFromBasket}>Remove Item</button>
            )}
    </div>
    </div>
  )
}
  
export default CheckoutProduct;
