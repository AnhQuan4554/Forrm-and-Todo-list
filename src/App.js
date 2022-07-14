import React from 'react'
import Register from './Register/Register'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sign_in from './Sign_in/Sign_in';
import Home from './Home/Home';
const App = () => {
  return (
   
    <>
        {/* <Home/> */}
        
        <Routes>
             <Route path="/" element={<Home/>}> </Route>
             <Route path="/Register" element={<Register/>}> </Route>
             <Route path="/Sign_in" element={<Sign_in />}> </Route>
        </Routes>

    
    </>
    
  )
}

export default App