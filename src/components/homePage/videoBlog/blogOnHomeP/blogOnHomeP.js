import classes from './blogOnHomeP.module.css'
import React from 'react'

const BlogOnHomeP = () => {
    return (
     <div className={classes.blogOnHomePage}>
         <img className={classes.blogOnHomePageImg} src="##" alt="blogHero"/>
         <h2 className={classes.blogTitle}>Lorem ipsum dolor sit.</h2>
                 {/*    there has to be date*/}
         <button className={classes.blogReadMore}>Read More</button>
     </div>
    )
}
export default BlogOnHomeP;