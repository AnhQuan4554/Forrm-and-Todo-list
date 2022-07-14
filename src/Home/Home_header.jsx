import React from 'react'
import {
 Link
} from "react-router-dom";
import {Nav} from'./Home_CSS'
const Home_header = () => {
  return (
    <Nav>
      <Link to="/">home</Link>
      <Link to="Register">Register</Link>
      <Link to="Sign_in">Sign_in</Link>
    </Nav>
  )
}

export default Home_header