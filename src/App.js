
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/Navbar';
import Service from './components/Services/Service';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Service />
    </div>
  );
}

export default App;
