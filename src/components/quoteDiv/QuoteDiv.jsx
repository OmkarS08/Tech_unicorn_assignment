import './QuoteDiv.css'

import { Button } from 'react-bootstrap';
export const QuoteDiv =() =>{
    return(<div className='Quote-div-container'>
    <div>

    </div>
    <div className='Quote-content-container'>
    <div className='Quote-container'><h1>Your Premium <br></br> Sound,Unplugged!</h1></div>
    <div className='para-container'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
        <Button  className=' btn-dark Quote-div-button' variant='dark' >Find out More</Button>
    </div>

    </div>);
}