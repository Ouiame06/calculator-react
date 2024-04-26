import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Calculator from './components/calculator';
import './min.css'
import './components/style.css'

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <nav className='navbar navbar-expand navbar-light justify-content-center'>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link className='nav-link' to="/"><strong>Home</strong></Link></li>
            <li className='nav-item'><Link className='nav-link' to="/calculator"><strong>Calculator</strong></Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);
export default App;
