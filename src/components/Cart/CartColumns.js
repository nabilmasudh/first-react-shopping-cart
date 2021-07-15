import React from 'react'
import style from './CartColumns.module.css'
export default function CartColumns() {
    return (
        <div id='container'>
            <div className={style.colunmsContainer}>
                <div className={style.columns}>
                    Products
                </div>
                <div className={style.columns}>
                    name of product
                </div>
                <div className={style.columns}>
                    price
                </div>
                <div className={style.columns}>
                    quantitiy
                </div>
                <div className={style.columns}>
                    remove
                    </div>
                <div className={style.columns}>
                    total
                </div>
            </div>
        </div>
    )
}
