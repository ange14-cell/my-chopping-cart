import React from 'react'
import products from './../Data';
import { useState } from 'react';

const Main = () => {

    
    const product = products.map((product)=>
        <div key={product.id}>
            <img className='image-smal' src={product.image} alt="" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>            
        </div>
   
    );
    return (
        <div className='block col-2' >
            <h2>products</h2>
            <div className='row' >
                {product}
            </div>
            
        </div>
    );
};

export default Main;