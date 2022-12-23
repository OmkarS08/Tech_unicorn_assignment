
import './App.css';
import { HomeComponent } from './routes/HomeComponent/HomeComponet';
import { Navigation } from './components/NavBar/Navigation';
function App() {
  return (
    <div >
    <Navigation/>   
    <HomeComponent/>
    <h2>Shop</h2>
    <h2>Product Details</h2>
    <h2>Gallery</h2>
    <h2>Cart</h2>
    </div>
  );
}

export default App;
