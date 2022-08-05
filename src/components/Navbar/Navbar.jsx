import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const Navbar = () => {
    return (
        <nav class="z-depth-3 col s5" className={classes.nav}>
            <List>
                <ListItemButton className={classes.item}>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link }  to="/profile">Profile</NavLink>
                </ListItemButton>
                <ListItemButton className={classes.item}>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/dialogs">Messages</NavLink>
                </ListItemButton>
                <ListItemButton className={classes.item}>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/news">News</NavLink>
                </ListItemButton>
                <ListItemButton className={classes.item}>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/music">Music</NavLink>
                </ListItemButton>
                <ListItemButton className={classes.item}>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/settings">Settings</NavLink>
                </ListItemButton>
                <ListItemButton className={classes.item}>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link } to="/users">Users</NavLink>
                </ListItemButton>
            </List>
        </nav>
    )
}

export default Navbar;