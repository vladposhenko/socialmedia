//<editor-fold desc="Description">
import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializedApp} from "./Redux/app-reducer.ts";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {compose} from "redux";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const Login = React.lazy(() => import("./components/Login/Login"))

class App extends React.Component {
    catchAllUnhandleErrors = () => {
    }
    componentDidMount(){
        window.addEventListener("unhandledrejection" , this.catchAllUnhandleErrors)
        this.props.initializedApp()
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection" , this.catchAllUnhandleErrors)
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
                                <Route exact path="/" element={<Navigate to="/profile" />} />
                                <Route path="/profile/" element={<ProfileContainer/>}/>
                                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                                <Route path="/dialogs" element={<DialogsContainer/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="*" element={<div>404</div>}/>
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
        <HashRouter >
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
        )
}

export default SocialApp;
//</editor-fold>
