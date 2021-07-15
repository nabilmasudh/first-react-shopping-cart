import React from 'react'
import { Link } from 'react-router-dom';
import style from './CartTotals.module.css';

export default function CartTotals({value}) {
    const {cartSubTotal,cartTax,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div id='container'>
                <div className={style.CartTotals}>
                    <div>
                        <Link to='/'>
                    <button onClick={()=> clearCart()}>clear cart</button>
                    </Link>
                    <h5>
                        <span>subtotal : </span>
                        <strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span>tax : </span>
                        <strong>$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span>total : </span>
                        <strong>$ {cartTotal}</strong>
                    </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
