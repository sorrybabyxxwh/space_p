import React from 'react'
import classes from "./homePage.module.css";



const HomePage = () =>{
    return(
        <div className={classes.fullPageWrapper}>
            <div className={classes.fullPageContent}>
            <h1>SOYUZ TMA-M</h1>
            <h2>SPACECRAFT</h2>
            <button className={classes.btn_readMore}>Read More</button>
            </div>
        </div>
    )
}
export default HomePage;