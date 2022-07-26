//<editor-fold desc="Description">
import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                {/* <Profile/> */}
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile/" element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId" element = {<ProfileContainer />}/>
                        <Route path="/dialogs" element = {<DialogsContainer />}/>
                        <Route path="/news" element = {<News />}/>
                        <Route path="/music" element = {<Music />}/>
                        <Route path="/settings" element = {<Settings />}/>
                        <Route path="/users" element = {<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
)
    ;
}


export default App;
//</editor-fold>
