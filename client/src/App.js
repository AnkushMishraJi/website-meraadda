import React, { useEffect, createContext, useReducer, useContext } from "react";

import Home from "./components/screens/Home";
import Navbar from "./components/navbar";
import Signin from "./components/screens/Bsignin";
import Signup from "./components/screens/Bsignup";
import UserSignin from "./components/screens/Usignin";
import UserPhoneCheck from "./components/screens/Uphone";
import UserSignup from "./components/screens/Usignup";


// import { reducer, initialState } from "./reducers/userReducer";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";



function App() {
    return (
     <BrowserRouter>
        <Navbar />
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/bsignin">
        <Signin />
        </Route>
        < Route path="/bsignup">
        <Signup />
        </Route>
        < Route path="/usignin">
        <UserSignin />
        </Route>
        < Route path="/uphone">
        <UserPhoneCheck />
        </Route>
        < Route path="/usignup">
        <UserSignup />
        </Route>
        </BrowserRouter>
    
  );
}

export default App;