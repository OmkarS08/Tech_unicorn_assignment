import './Navigation.css'
import { IoCallOutline, IoHeartOutline,IoSearchOutline} from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineUser,AiOutlineShoppingCart,AiOutlineBell} from "react-icons/ai";
/******************************************************************************/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { scroller } from 'react-scroll';
/****************************************************************************** */
import { QuoteDiv } from '../../components/quoteDiv/QuoteDiv'
import { ProductContainer } from '../../components/ProductContainer/ProductContainer';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { Footer } from '../../components/Footer/Footer';
/****************************************************************************** */

export const Navigation =() =>{
   const style = { color: "black", fontSize: "1.5em" }
        return (
<div>
<div className='heading-container'>
<div className='brand-logo-container'>
<Nav className="me-auto">
       <Nav.Link onClick={() => scroller.scrollTo('/', {smooth: true, offset: -70, duration: 500,})} ><h2>Dealerz.</h2></Nav.Link>
</Nav>  
</div>
<div className='icon-heading-container'>
   <span><IoCallOutline style={style} />Call Center</span>
   <span><MdOutlineLocalShipping style={style}/>Shipping & Return</span>
</div>
</div>
<div>
<Navbar bg="light" sticky="top" variant="dark">
   <Container>
   <Nav  className="me-auto ">
       <Nav.Link className='nav-items'  onClick={() => scroller.scrollTo('product', {smooth: true, offset: -70, duration: 500,})} >Shop</Nav.Link>
       <Nav.Link className='nav-items' onClick={() => scroller.scrollTo('Newsletter', {smooth: true, offset: -70, duration: 500,})}>NewsLetter</Nav.Link>
       <Nav.Link className='nav-items' onClick={() => scroller.scrollTo('Contacts', {smooth: true, offset: -70, duration: 500,})}>Contacts</Nav.Link>
       <Nav.Link className='nav-searchBar' as='span'><input type='search' placeholder='Search What you need' /></Nav.Link>
       <Nav.Link className='nav-items'><IoHeartOutline style={style}/></Nav.Link>
       <Nav.Link className='nav-items'><AiOutlineShoppingCart style={style}/></Nav.Link>
       <Nav.Link className='nav-items'><AiOutlineUser style={style}/></Nav.Link>
       <Nav.Link className='nav-items'><AiOutlineBell style={style}/></Nav.Link>
   </Nav>
   </Container>
</Navbar>
 <section id="/">{<QuoteDiv/>}</section>
 <section id="product">{<ProductContainer/>}</section>
 <section id="Newsletter">{<NewsLetter/>}</section>
 <section id="Contacts">{<Footer/>}</section>
</div> 
</div>
          );}


