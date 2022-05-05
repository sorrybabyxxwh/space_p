import classes from "./navbar.module.css";
const Navbar = () =>{
    return(
        <nav className={classes.navbar}>
            <img src="https://cdn.worldvectorlogo.com/logos/space-raiders.svg" alt="logo"/>
            <h3>Space Protection</h3>
            <ul className={classes.navbarLinks}>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;