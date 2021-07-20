import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Mission from './pages/Mission';
import Events from './pages/Events';
import TheTeam from './pages/TheTeam';
import ContactUs from './pages/ContactUs';
import Blog from './pages/Blog';

// footer will go under </Router>

function App() {
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
      </Router>
    </div>

   
  );
}

export default App;
