import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AuctionList from './AuctionList';
import Auction from './Auction';

function App() {
  return (
      <Router>
          <div>
              {/*navigation bar with links*/}
              <nav>
                  <ul>
                      <li>
                          <Link rel="stylesheet" to="/">
                          Home</Link>
                      </li>
                      <li>
                          <Link rel="stylesheet" to="/register">
                          Register</Link>
                      </li>
                      <li>
                          <Link rel="stylesheet" to="/login">
                          Login</Link>
                      </li>
                  </ul>
              </nav>
          </div>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/" element={<AuctionList/>}/>
              <Route path="/auction/:id" element={<Auction/>}/>
          </Routes>
      </Router>
  );
}

export default App;
