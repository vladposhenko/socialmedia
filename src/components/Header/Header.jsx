import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Button from "@mui/material/Button";

const Header = (props) => {
    return (
        <Grid container  className={classes.header}>
            <Grid item xs={6} >
                <a href="">
                    <img src="https://resource.logitechg.com/w_385,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/homepage/pro-series-logo.png?v=1" alt="132"></img>
                </a>
            </Grid>
            <Grid item xs={6} >
                <div className={classes.logInBtn}>
                    {props.isAuth
                        ? <div> <span className={classes.name}>{props.login}</span><Button className={classes.logoutBtn} variant="contained" size="small" onClick={props.logout}>LogOut</Button> </div>
                        : <NavLink to={'/login'} >LogIn</NavLink>  }
                </div>
            </Grid>
        </Grid>
    )
}

export default Header