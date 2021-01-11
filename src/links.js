import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Links = () => {
  const style = { 
    'list-style-type': 'none',
    'margin': '0',
    'padding': '0',
    'overflow': 'hidden',
    'backgroundColor': '#333'
  }

  const liLink = { 
    'display': 'block',
    'color': 'white',
    'text-align': 'center',
    'padding': '14px 16px',
    'text-decoration': 'none'
  }

  const liHr = {
    'float': 'left'
  }

  return (
    <div className="App fluid">
      <h3>Products</h3>
      <div>
        <ul style = { style }>
          <li style = { liHr }>
            <Link style = { liLink } to="/" >Home</Link>
          </li>
          <li style = { liHr }>
            <Link style = { liLink } to="/about" >About</Link>
          </li>          
          <li style = { liHr }>
            <Link style = { liLink } to="/product" >Go to product</Link>
          </li>
          <li style = { liHr }>
            <Link style = { liLink } to="/services" >Go to services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Links;