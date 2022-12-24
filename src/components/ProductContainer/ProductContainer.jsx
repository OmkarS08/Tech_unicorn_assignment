import './ProductContainer.css'
import { ProductCard } from '../ProductCard/ProductCard';
import { useState,useEffect } from 'react';
export const ProductContainer =()=>{

    const [ data ,setData] =useState([]);
    useEffect(()=>{
        fakeStoreApi();
    },[])
    const [searchItem ,setSearchItem] =useState("")
    const [categoryItem, setCategoryItem]=useState("All");
    const [sorted,SetSorted]=useState("lowest");
    

    const fakeStoreApi = async () =>{
        const response =await fetch('https://fakestoreapi.com/products')
        const jsonData = await response.json()
        setData(jsonData);

    }
    //unique id for category
    const getUniqueData =(data, category)=>{
            let newData = data.map((item)=>{
                return item[category];
            });
            
           return newData =['All',...new Set(newData)]
    
    }
   


    //handle click for category button
    const handleClick =(name)=>{
        setCategoryItem(name);
        console.log(categoryItem);
    }
const CategoryData =getUniqueData(data ,"category");



    const getSorted =() =>{
        let selectedValue = document.getElementById("sort");
        let valsorted =selectedValue.options[selectedValue.selectedIndex].value
        SetSorted(valsorted);
    }


 return(<div className='product-container'>
        <div className='product-title'>
        <h2>Our Premium Collections</h2>
        </div>
        <div className='Functionality'>
            <div className='SearchBar'>
                <h2>SearchBar</h2>
                <input id='searchInput' 
                type='text' 
                placeholder='search products here'
                onChange={(event)=>{setSearchItem(event.target.value)}}
                ></input>
            </div>
            <div className='CategorySort'>
            <h3>Category-Sort</h3>
            <div>
            {CategoryData.map((item)=>{ return <button key={item} name={item} onClick={()=>handleClick(item)}>{item}</button>})}
            </div>
            <div className='PriceSort'>
                <h3>Price-Sort</h3>
                <div>
                    <form action='#'>
                        <label htmlFor='sort'></label>
                        <select name= 'sort' id='sort' onClick={getSorted}>
                            <option value="lowest" >Price(Lowest)</option>
                            <option value="#" disabled></option>
                            <option value="Highest">Price(Highest)</option>
                            <option value="#" disabled></option>
                        </select>
                    </form>
                </div>
            </div>
            </div>
        </div>
        <div className='product-card-container'>
        {
            data.filter((val)=>{
                if(searchItem === ""){
                    return val;
                }
                else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
                    return val;
                }})
                .filter((val)=>{
                    if(categoryItem === "All" || val.category === categoryItem)
                    {
                        return val;
                    }
                })
                .sort((a,b)=>{
                    if(sorted ==='lowest')
                    {
                        return a.price -b.price;
                    }
                    else
                    {
                        return b.price -a.price;
                    }
                  
                })
               .map((items)=>{return <ProductCard key={items.id} products= {items} />})
        }
        </div>
        <div className='product-card-button'>
        <button >Find out more</button></div>
 
        </div>)
}