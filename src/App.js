import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import Events from './pages/Events/Events';
import TheTeam from './pages/TheTeam/TheTeam';
import ContactUs from './pages/ContactUs/ContactUs';
import Blog from './pages/Blog/Blog';

import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component ={Home} />
          <Route path = '/TheTeam' exact component ={TheTeam} />
          <Route path = '/Mission' exact component ={Mission} />
          <Route path = '/Events' exact component ={Events} />
          <Route path = '/Blog' exact component ={Blog} />
          <Route path = '/ContactUs' exact component ={ContactUs} />
        </Switch>
        <Footer />
      </Router>
    </div>

   
  );
}


