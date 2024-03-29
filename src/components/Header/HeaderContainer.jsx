import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout, setAuthUsersData} from "../../Redux/auth-reducer.ts";

class HeaderContainer extends React.Component {

    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUsersData, logout})(HeaderContainer)