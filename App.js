import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Destination from "./Components/Destination/Destination";
import DestinationSelection from "./Components/DestinationSelection/DestinationSelection";
import Error from "./Components/Error/Error";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      
       <Header/>
      
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute exact path="/destination/:cartId">
          <DestinationSelection/>
        </PrivateRoute>
        <PrivateRoute exact path="/destination/:cartId/:from/:to"> 
          <Destination/>
        </PrivateRoute>
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/contact">
        <Contact/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
