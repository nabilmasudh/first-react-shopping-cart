import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom';
import style from './Modal.module.css';


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    }else{
                        return(
                            <div className={style.modalContainer}>
                                <div className={style.modal}>
                                    <h2>item added to the cart</h2>
                                    <img src={img} alt=''/>
                                    <h2>{title}</h2>
                                    <h3>price : ${price}</h3>
                                    <Link to='/'>
                                        <button onClick={()=>closeModal()} >
                                            Continue shopping
                                        </button>
                                    </Link>
                                    {' '}
                                    <Link to='/cart'>
                                        <button onClick={()=>closeModal()} >
                                            Go to Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
