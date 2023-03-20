import React from 'react'
import rab from "../pics/rab.jpeg";
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="primary-header flex">
        <div className="logo flex">
          <div className="logo2">
            <img src={rab} alt="logo" />
            <h2 className="logo3">Rabindra</h2>
          </div>

          <div>
            <h1 className="line">Web Developer</h1>
          </div>
        </div>
        <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul className="navigation flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about-me">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

        
      </header>

  )
}
