import { Link } from "gatsby"
import React from "react"
import {RiShoppingCart2Line } from "react-icons/ri"

const Header = () => (
  <header>
    <div className="Container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">KUBIY KITCHEN</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart"><RiShoppingCart2Line /></Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
