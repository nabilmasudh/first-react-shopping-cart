import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        
        return (
            <div id='container'>
               <div style={{
                   textAlign:'center',
                   marginTop:'3rem'
               }}>
                    <h1>404</h1>
                    <h2>error</h2>
                    <h2>page not found</h2>
                    <h3>the requested URL <span style={{color:'#DC3545'}}>{this.props.location.pathname}</span>{' '} was not found</h3>
               </div>
            </div>
        )
    }
}
