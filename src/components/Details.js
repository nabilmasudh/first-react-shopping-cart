import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                const {id, company, img, info, price, title, inCart} = value.detailProduct;
                return (
                    <div style={{width:'100%', maxWidth:"60rem", margin:"0 auto"}}>
                        <h2 style={{textAlign:"center", marginTop:"2rem"}}>{title}</h2>
                        <div style={{display:"flex",alignItems:"center", justifyContent: "center"}}>
                            <div>
                                <img src={img} alt='' />
                            </div>
                            <div>
                                <h3>model : {title}</h3>
                                <h4>mede by : <span>{company}</span></h4>
                                <strong>price : <span> $</span>{price}</strong>
                                <strong>
                                    <p>some info about product : </p>
                                </strong>
                                <p>{info}</p>
                                {/* add To button  */}
                                <div style={{margin: "2rem 0"}}>
                                    <Link to='/'>
                                        <button>back to Products</button>
                                    </Link>
                                    {' '}
                                    <button disabled={inCart ? true : false}
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                    >{inCart ? "inCart": "Add To Cart"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}
