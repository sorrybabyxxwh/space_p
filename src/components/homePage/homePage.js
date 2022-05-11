import React from 'react'
import classes from "./homePage.module.css";
import {Link} from "react-router-dom";



const HomePage = () =>{
    return(
        <div className={classes.fullPageWrapper}>
            <div className={classes.fullPageContent}>
            <h1>SOYUZ TMA-M</h1>
            <h2>SPACECRAFT</h2>
                <div>
                    <Link to='/about'>
                        <button className={classes.btn_readMore}>Read More</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default HomePage;