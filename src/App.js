import React from 'react'
import classes from './App.module.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/homePage/homePage"
import VideoBlog from "./components/homePage/videoBlog/videoBlog";
import About from "./components/aboutPage/about";
import FirstPage from "./components/firstPage/firstPage";
import Blog from "./components/blogPage/blog";
import Contact from "./components/contactPage/contact";


function App() {
    return (
        <div className={classes.appWrapper}>
            <Navbar/>
                <div>
                    <Routes>
                        <Route path="/" element={<FirstPage/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/contact" element={<Contact/>}/>

                    </Routes>
                </div>
        </div>
    );
}

export default App;
