import React from 'react'

export default function Title({name, title}) {
    return (
        <div className='text-center'>
            <h2>{name} <span>{title}</span></h2>
        </div>
    )
}
