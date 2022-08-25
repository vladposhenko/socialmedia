import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {CheckBox,  Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilits/validators/validators";
import Button from '@mui/material/Button';
import {login} from "../../Redux/auth-reducer.ts";
import {Navigate} from "react-router-dom";
import classes from "./Login.module.css";
import {Alert, TextField} from "@mui/material";

// const Input = Element("input");

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field className={classes.loginInput} validate={[required]} placeholder={'Email'} name={'email'} component={Input}/>
                </div>
                <div>
                    <Field className={classes.loginInput} validate={[required]} placeholder={'Password'} name={'password'} type={'password'} component={Input} />
                </div>
                <div>
                    <Field  component={CheckBox} name={'rememberMe'} type="checkbox"/> <div className={classes.remember}>Remember Me</div>
                </div>
                { error &&
                    <Alert severity="error" className={classes.error}>
                        {error}
                    </Alert>
                }

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <Field validate={[required]} placeholder={'Captcha'} type={'text'} name={'captcha'} component={Input} /> }
                <div>
                    <Button className={classes.loginButton} variant="contained" color="secondary" size={'small'} type={"submit"}>Send</Button>
                </div>
            </form>
        </div>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        console.log(formData)
    }
    if (props.isAuth) {
        return <Navigate to="/profile"/>
    } else {
        return(
            <div className={classes.loginPage}>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{
    login
})(Login)