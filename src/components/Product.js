import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FaCartArrowDown} from "react-icons/fa";
import { ProductConsumer } from '../context'

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
      
                <div className='carts'>
                    <ProductConsumer>
                        {value=> (
                            <div key={id} className='cart-items' onClick={()=>value.handleDetail(id)}>
                                <Link to='/details'>
                                    <img src={img} alt='product'/>
                                </Link>
                                <button disabled={inCart ? true : false} onClick={()=>{
                                    value.addToCart(id);
                                    value.openModal(id)
                                    }}>
                                {inCart ? <p disabled>{' '}In Cart</p>: <FaCartArrowDown/>}
                                </button>
                            </div>
                        )}
                    
                    </ProductConsumer>
                    <div className='cart-footer'>
                        <p>{title}</p>
                        <span>${price}</span>
                    </div>
                </div>
        );
    }
}
