import React from "react";
import classes from '../../Users/users.module.css'


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <ul className={classes.pageContainer}>
                {pages.map(page => {
                    return <li count={1} className={currentPage === page ? classes.selectedPage : classes.page}
                                 onClick={(e) => {
                                     onPageChanged(page)
                                 }}><a className={classes.pageLink} href="src/components/common/Paginator/Paginator#">{page}</a></li>
                })}
            </ul>
        </div>
    )
}




export default Paginator;