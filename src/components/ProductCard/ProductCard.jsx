import './ProductCard.css'
import { Card  , ListGroup } from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai";
export const ProductCard =(props) =>{
    
    const { id ,category,description,image,price ,rating,title} = props.products;


    return(
        <div className='Product-Card'>
        <Card style={{ width: '18rem' }}>
        <Card.Img className='card-image' variant="top" src={image}/>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>  
          <Card.Title>{title}</Card.Title> 
        <button className='card-btn' variant="primary"><AiOutlineArrowRight/></button>
        </Card.Body>
      </Card>
        </div>

    )
}