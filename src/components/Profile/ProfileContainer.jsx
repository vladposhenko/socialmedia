import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, setUserProfile} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userId = this.props.router.params.userId ;
        if (!userId){
            userId = 2
        }
        this.props.getProfileUser(userId)
        // usersAPI.getProfileUser(userId).then(response => {
        //     this.props.setUserProfile(response.data)
        // })
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login"/>
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        debugger;
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

// let WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps,{
    getProfileUser,
})(withRouter(ProfileContainer))