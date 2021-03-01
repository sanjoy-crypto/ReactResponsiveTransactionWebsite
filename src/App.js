import React from 'react'
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Pages/Footer/Footer';
import Home from './Components/Pages/HomePage/Home'
import Products from './Components/Pages/Products/Products';
import Services from './Components/Pages/Services/Services';
import Signup from './Components/Pages/Signup/Signup';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
    <Router>
    <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/sign-up' exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
      
    </div>
  );
}

export default App;
