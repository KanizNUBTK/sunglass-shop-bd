import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import OurProduct from './pages/OurProduct/OurProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/ourProduct">our product</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/ourProduct">
            <OurProduct></OurProduct>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
