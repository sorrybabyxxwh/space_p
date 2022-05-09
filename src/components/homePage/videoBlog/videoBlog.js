import React, {useState} from 'react'
import classes from "./videoBlog.module.css";
import BlogOnHomeP from "./blogOnHomeP/blogOnHomeP";



const VideoBlog = () =>{
return (
    <div className={classes.wholeSection}>
        <h2 className={classes.title}>Recent Updates</h2>
        <div className={classes.videoBlog}>
            <div className={classes.ourMissionSection}>
                <h1 className={classes.OurMissionText}>Lorem ipsum.</h1>
                <p className={classes.aboutOurMission}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis deleniti dignissimos eveniet facere fuga fugit harum neque nisi, nostrum quibusdam sint totam?</p>
            </div>
            <div className={classes.blogSection}>
                <BlogOnHomeP />
                <BlogOnHomeP />
            </div>
        </div>
    </div>
)};
export default VideoBlog;
