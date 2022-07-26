import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header  className={classes.header}>
            <a href="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="132"></img>
            </a>
            <div className={classes.logInBtn}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'} >LogIn</NavLink>  }

            </div>

        </header>
    )
}

export default Header