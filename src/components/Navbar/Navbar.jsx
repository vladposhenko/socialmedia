import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="z-depth-3 col s5" className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.link }  to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/music">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/settings">Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/users">Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;