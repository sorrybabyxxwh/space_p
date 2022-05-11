import classes from './blogOnHomeP.module.css'
import React from 'react'
import {Link} from "react-router-dom";

const BlogOnHomeP = () => {
    return (
     <div className={classes.blogOnHomePage}>
         <div className={classes.imgAndTextSection}>
             <img className={classes.blogOnHomePageImg} src="https://dr.savee-cdn.com/things/6/2/7935f9f76552fdf177d037.jpg" alt="blogHero"/>
             <h2 className={classes.blogTitle}>Lorem ipsum dolor sit.</h2>
             <div>
                 <Link to='/blog'>
                     <button className={classes.blogReadMore}>Read More</button>
                 </Link>

             </div>

         </div>
     </div>
    )
}
export default BlogOnHomeP;