import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div id='container'>
                    <div className='title'>
                        <Title name="our" title='products'/>
                    </div>
                    <div className='center'>
                        <ProductConsumer>
                            {value =>{
                                return value.products.map(product =>{
                                    return <Product key={product.id}product={product}/>;
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
