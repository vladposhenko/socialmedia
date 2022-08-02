import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileUser, getStatus, updateStatus} from "../../Redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId ;
        if (!userId){
            userId = 25078
        }
        this.props.getProfileUser(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} />
        )
    }
}


let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
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


export default compose(
    connect(mapStateToProps,{getProfileUser,getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)