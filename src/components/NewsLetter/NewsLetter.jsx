import './NewsLetter.css'
import { AiOutlineArrowRight } from "react-icons/ai";
export const NewsLetter =() =>{
    return(<div className='newsletter-container'>
        <div className='news-letter'>
            <div className='news-text'>
                <h2>Join Our NewsLetter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='news-input'>
                <input type='email'></input>
                <button><AiOutlineArrowRight/></button>
            </div>
        </div>
    </div>)
}