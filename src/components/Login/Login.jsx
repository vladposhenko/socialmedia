import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {setUser} from "../../Redux/auth-reducer";

const LoginForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field component={'input'} name={'rememberMe'} type="checkbox"/>
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