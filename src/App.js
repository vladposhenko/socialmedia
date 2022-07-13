//<editor-fold desc="Description">
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    debugger;
    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                {/* <Profile/> */}
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element = {<Profile />}/>
                        <Route path="/dialogs" element = {<DialogsContainer />}/>
                        <Route path="/news" element = {<News />}/>
                        <Route path="/music" element = {<Music />}/>
                        <Route path="/settings" element = {<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
)
    ;
}


export default App;
//</editor-fold>