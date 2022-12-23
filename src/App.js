import { Navbar } from 'react-bootstrap';
import './App.css';
import { Navigation } from './components/NavBar/Navigation';
function App() {
  return (
    <div >
    <Navigation/>   
    <h2>Home</h2>
    <h2>Shop</h2>
    <h2>Product Details</h2>
    <h2>Gallery</h2>
    <h2>Cart</h2>
    </div>
  );
}

export default App;
