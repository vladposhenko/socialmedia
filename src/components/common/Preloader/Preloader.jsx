import loader from "../../../assets/images/loader.gif";
import classes from "./preloader.module.css";


let Preloader = (props) => {
    return (
        <div className={classes.preloader}>
            <img src={loader} />
        </div>
    )
}

export default Preloader;