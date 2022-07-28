import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUsersData} from "../../Redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount(){
        usersAPI.getAuth().then(response => {
                 if (response.data.resultCode === 0) {
                     let {id,login,email} = response.data.data
                     this.props.setAuthUsersData(id, email, login)
                 }
        })
    }
    render(){
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer)