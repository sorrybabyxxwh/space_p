import classes from "./navbar.module.css";
import {Link} from "react-router-dom";
import React from 'react';

const Navbar = () =>{
    return(
        <div className={classes.sticky}>
        <nav className={classes.navbar}>
            <img src="https://cdn.worldvectorlogo.com/logos/space-raiders.svg" alt="logo"/>
            <h3>Space Protection</h3>
            <ul className={classes.navbarLinks}>
                <li><Link to="/" >HOME</Link ></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/contact">CONTACT</Link ></li>
            </ul>
        </nav>
        </div>
    )
}
export default Navbar;