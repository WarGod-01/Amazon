import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{basket}, dispatch]=useStateValue();
  const navigate= useNavigate();
  return (
     
  <div className='subtotal'>
    <CurrencyFormat
    renderText={(value) => (

        <>
            <p>
           
            {/* {SportsBasketball.length}{` ${value}`} */}
                Subtotal({basket?.length} items):
                <strong>₹ {value}</strong>
            </p>
            <small className='subtotal_gift'>
                <input type='checkbox' />This Order Contains a Gift
            </small>
        </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    // {getBasketTotal(basket)}
    displayType={'text'}
    thousandSeparator={true}
    prifix={'₹'}
    />
      <button onClick={ e =>navigate('/payment')}>Proceed To Checkout</button>
    </div>
  )}


export default Subtotal;
