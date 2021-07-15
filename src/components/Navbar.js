import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaReact,FaCartArrowDown } from "react-icons/fa";

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div id='container'>
                    <div className='center'>
                        <div className='brand'>
                            <Link to='/' style={{color: "#ffa400"}}>
                                <FaReact/>
                            </Link>
                        </div>   
                        <div className='link'>
                            <ul>
                                <li >
                                    <Link to='/' style={{color: "#ffa400"}}>
                                            Product
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='cart'>
                            <Link to='/cart'>
                                <button>
                                    <FaCartArrowDown/> Cart
                                </button>
                            </Link>
                        </div>
                    </div>
                        
                </div>
            </nav>
        )
    }
}
