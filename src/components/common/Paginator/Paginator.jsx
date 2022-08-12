import React, {useState} from "react";
import classes from '../../Users/users.module.css'
import Button from "@mui/material/Button";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize;
    return (
        <div className={classes.mainWrap}>
            <ul className={classes.pageContainer}>
                { portionNumber > 1 &&
                    <Button size="small" variant="contained" onClick={() => setPortionNumber(portionNumber - 1)}>PREV</Button>
                }
                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map(page => {
                    return <li count={1} className={currentPage === page ? classes.selectedPage : classes.page}
                                 onClick={(e) => {
                                     onPageChanged(page)
                                 }}><a className={classes.pageLink}>{page}</a></li>
                })}
                {portionCount > portionNumber &&
                    <Button size="small" variant="contained" onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</Button>
                }
            </ul>
        </div>
    )
}




export default Paginator;