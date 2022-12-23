import './ProductContainer.css'
import { ProductCard } from '../ProductCard/ProductCard';
import { json } from 'react-router-dom';
import { useState,useEffect } from 'react';
export const ProductContainer =()=>{

    const [ data ,setData] =useState([]);
        console.log(data);
    useEffect(()=>{
        fakeStoreApi();
    },[])


    const fakeStoreApi = async () =>{
        const response =await fetch('https://fakestoreapi.com/products')
        const jsonData = await response.json()
        setData(jsonData);

    }


 return(<div className='product-container'>
        <div className='product-title'>
        <h2>Our Premium Collections</h2>
        </div>
        <div className='product-card-container'>
            {data.map((items)=> {return <ProductCard key={items.id} products= {items} />})}  
        </div>
        </div>)
}