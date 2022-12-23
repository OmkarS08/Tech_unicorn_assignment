
import './HomeComponent.css'
import { QuoteDiv } from '../../components/quoteDiv/QuoteDiv'
import { ProductContainer } from '../../components/ProductContainer/ProductContainer';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { Footer } from '../../components/Footer/Footer';
export const HomeComponent =() =>{



    return(<div className='HomeComponent'>
            <QuoteDiv/>
            <ProductContainer/>
            <NewsLetter/> 
            <Footer/>
             </div>)
}