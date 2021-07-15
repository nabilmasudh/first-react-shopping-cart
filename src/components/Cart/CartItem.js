import React from 'react'
import style from './CartItem.module.css'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BsTrash} from "react-icons/bs";


export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className={style.cartItemContainer}>
            <div className={style.columns}>
                <img src={img} alt='' className={style.cartItemImg}/>
            </div>
            <div className={style.columns}>
                <p>{title}</p>
            </div>
            <div className={style.columns}>
                <p>${price}</p>
            </div>
            <div className={style.columns}>
                <button>
                    <span onClick={()=> decrement(id)}>
                    <AiOutlineMinus/>
                    </span>
                </button>
                {' '}
                <button className={style.countBtn}>
                    <span>{count}</span>
                </button>
                {' '}
                <button>
                    <span onClick={()=> increment(id)}>
                    <AiOutlinePlus/>
                    </span>
                </button>
            </div>
            <div className={style.columns}>
                <span onClick={()=>removeItem(id)}>
                    <BsTrash/>
                </span>
            </div >
            <div className={style.columns}>
                <span>Total Items : {total}</span>
            </div>
        </div>
    )
}
