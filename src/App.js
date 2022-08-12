//<editor-fold desc="Description">
import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {getAuth} from "./Redux/auth-reducer";
import {initializedApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {compose} from "redux";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const Login = React.lazy(() => import("./components/Login/Login"))

class App extends React.Component {
    componentDidMount(){
        this.props.initializedApp()
    }
    render() {
        if(!this.props.initialized)  return <Preloader/>
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <React.Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path="/profile/" element={<ProfileContainer/>}/>
                                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                                <Route path="/dialogs" element={<DialogsContainer/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/login" element={<Login/>}/>
                            </Routes>
                        </React.Suspense>
                    </div>
                </div>
        )

    }
}



const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer =  compose(
    connect(mapStateToProps,{initializedApp})(App)
)


const SocialApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
        )
}

export default SocialApp;
//</editor-fold>
