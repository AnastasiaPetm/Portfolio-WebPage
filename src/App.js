import './App.css';
import Navbar from './components/Navbar.js';
import Ingrained from './pages/Ingrained.js';
import Home from './pages/Home.js';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import GraySpider from './pages/GraySpider';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}>
          </Route>
          <Route path='/Ingrained' exact Component={Ingrained}>
          </Route>
          <Route path='/GraySpider' exact Component={GraySpider}>
          </Route>
        </Routes>
      </Router>
      
      </>
  );
}

export default App;
