import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import Stocks from './Components/Stocks';
import InventoryDashboard from './Components/Dashboard';
import AboutUs from './Components/About';
import Welcome from './Components/Welcome';
import Index from './Components/Index';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the route for signup */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stock" element={<Stocks />} />
          <Route path="/dashboard" element={<InventoryDashboard/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/index" element={<Index/>} />
          
        
        
        
          {/* You can add more routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
