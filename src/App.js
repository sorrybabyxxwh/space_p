import React from 'react'
import classes from './App.module.css';
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/homePage/homePage"
import VideoBlog from "./components/homePage/videoBlog/videoBlog";


function App() {
    return (
        <div className={classes.appWrapper}>
            <Navbar/>
            <HomePage/>
            <VideoBlog/>
        </div>
    );
}

export default App;
