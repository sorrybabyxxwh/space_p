import React from 'react'
import ReactPlayer from 'react-player'
import classes from "./videoBlog.module.css";
import BlogOnHomeP from "./blogOnHomeP/blogOnHomeP";



const VideoBlog = () =>{
return (
    <div className={classes.wholeSection}>
        <h2 className={classes.title}>Lorem ipsum dolor.</h2>
        <div className={classes.videoBlog}>
            <div className={classes.videoPlayer}>
                {/*<ReactPlayer url='https://www.youtube.com/watch?v=qCljI3cIObU&list=RDMM&index=8' playing='false' />*/}
            </div>
            <div className={classes.blogSection}>
                <BlogOnHomeP />
                <BlogOnHomeP />
            </div>
        </div>
    </div>
)
};
export default VideoBlog;