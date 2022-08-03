import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setUser} from "../../Redux/auth-reducer";
import {Element} from "../common/FormsControls/FormsControls";
import {required} from "../../utilits/validators/validators";

const Input = Element("input");

const LoginForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[required]} placeholder={'Login'} name={'login'} component={Input}/>
                </div>
                <div>
                    <Field validate={[required]} placeholder={'Password'} name={'password'} component={Input}/>
                </div>
                <div>
                    <Field component={Input} name={'rememberMe'} type="checkbox"/> <span>remember me</span>
                </div>
                <div>
                    <button type={"submit"}>Send</button>
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
        setUser(formData)
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}


export default connect(mapStateToProps,{
    setUser
})(Login)