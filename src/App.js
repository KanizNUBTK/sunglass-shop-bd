import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import OurProduct from './pages/OurProduct/OurProduct';
import Login from './Shared/Login/Login';
import Register from './Shared/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import ShowProduct from './pages/ShowProduct/ShowProduct';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route exact path="/ourProduct">
                <OurProduct></OurProduct>
              </Route>
              <PrivateRoute exact path="/showProduct/:productId">
                <ShowProduct></ShowProduct>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
         </Router>
      </AuthProvider>
   
    </div>
  );
}

export default App;
