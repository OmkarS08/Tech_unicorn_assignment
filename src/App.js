import { Route,Routes } from 'react-router-dom';
import './App.css';
import { HomeComponent } from './routes/HomeComponent/HomeComponet';
import { Navigation } from './components/NavBar/Navigation';
function App() {
  return (
    <div >
    <Navigation/>   
    </div>
  );
}

export default App;
