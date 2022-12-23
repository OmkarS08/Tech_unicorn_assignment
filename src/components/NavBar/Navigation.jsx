import './Navigation.css'
import { IoCallOutline, IoHeartOutline,IoSearchOutline} from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineUser,AiOutlineShoppingCart,AiOutlineBell} from "react-icons/ai";
/******************************************************************************/
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation =() =>{
        return (
<div>
<div className='heading-container'>
<div className='brand-logo-container'>
   <h2>Dealerz.</h2>
</div>
<div className='icon-heading-container'>
   <span><IoCallOutline/>Call Center</span>
   <span><MdOutlineLocalShipping/>Shipping & Return</span>
</div>
</div>
<div>
<Navbar bg="dark" sticky="top" variant="dark">
   <Container>
   <Nav className="me-auto">
       <Nav.Link href="#home">Shop</Nav.Link>
       <Nav.Link href="#features">Promo</Nav.Link>
       <Nav.Link href="#pricing">About</Nav.Link>
       <Nav.Link href="#pricing">Blog</Nav.Link>
       <Nav.Link as='span' href="#pricing"><input type='search' placeholder={`Search What you need`} /></Nav.Link>
       <Nav.Link href="#pricing"><IoHeartOutline/></Nav.Link>
       <Nav.Link href="#pricing"><AiOutlineShoppingCart/></Nav.Link>
       <Nav.Link href="#pricing"><AiOutlineUser/></Nav.Link>
       <Nav.Link href="#pricing"><AiOutlineBell/></Nav.Link>
   </Nav>
   </Container>
</Navbar>
</div> 
</div>
          );}


{/* <div className='heading-container'>
<div className='brand-logo-container'>
   <h2>Dealerz</h2>
</div>
<div className='icon-heading-container'>
   <span><IoCallOutline/>Call Center</span>
   <span><MdOutlineLocalShipping/>Shipping & Return</span>
</div>
</div>
<div>
<Navbar bg="dark" variant="dark">
   <Container>
   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
   <Nav className="me-auto">
       <Nav.Link href="#home">Home</Nav.Link>
       <Nav.Link href="#features">Features</Nav.Link>
       <Nav.Link href="#pricing">Pricing</Nav.Link>
   </Nav>
   </Container>
</Navbar>
</div>      */}