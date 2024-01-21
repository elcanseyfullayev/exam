import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        <Link to={"/"}><img src="https://preview.colorlib.com/theme/shop/img/logo.png.webp" alt="" /></Link>
        <div className="menu">
            <Link to={"/"}><div className="menuitem">HOME</div></Link>
            <div className="menuitem">CATEGORY</div>
            <div className="menuitem">MEN</div>
            <div className="menuitem">WOMEN</div>
            <div className="menuitem">LATEST</div>
            <div className="menuitem">PAGES</div>
        </div>
    </nav>
    </>
  )
}

export default Navbar