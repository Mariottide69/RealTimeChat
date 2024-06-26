import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export class Navbar extends Component {
   render() {
      return (
         <nav className="navbar">
            <Link to="/" className="navbar-button">
               Home
            </Link>
            <Link to="/voice" className="navbar-button">
               Registra voce
            </Link>
            <Link to="/chat" className="navbar-button">
               Chat
            </Link>
            <Link to="/users" className="navbar-button">
               Users
            </Link>
         </nav>
      );
   }
}

export default Navbar