import classes from './blogOnHomeP.module.css'
import React from 'react'

const BlogOnHomeP = () => {
    return (
     <div className={classes.blogOnHomePage}>
         <div className={classes.imgAndTextSection}>
             <img className={classes.blogOnHomePageImg} src="https://images.unsplash.com/photo-1638913662380-9799def8ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="blogHero"/>
             <h2 className={classes.blogTitle}>Lorem ipsum dolor sit.</h2>
             <button className={classes.blogReadMore}>Read More</button>
         </div>
     </div>
    )
}
export default BlogOnHomeP;