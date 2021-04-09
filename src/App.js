import './App.css';
import { useState } from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import About from './about';
import Contact from './contact';
import Task from './task';


function App() {

    const [currentTab, setCurrentTab] = useState();

    function Home() {
        return (
            <div className={'container-fluid'}> Welcome to your Task Manager App! </div>
        );
    }

    return (
        <div>
            <Router>
                <div className={'container-fluid bg-info navBar'}>
                    <div className={'row'}>
                        <div className={'d-inline p-2 col-sm-12 col-md-4 col-lg-1'}>
                            <NavLink className={'nav-bar'} to="/about" style={{ color: '#ffcc5c' }} activeStyle={{ fontWeight: "bold", color: "black" }}>About</NavLink>
                        </div>
                        <div className={'d-inline p-2 col-sm-12 col-md-4 col-lg-1'}>
                            <NavLink className={'nav-bar'} to="/tasks" style={{ color: '#ffcc5c' }} activeStyle={{ fontWeight: "bold", color: "black" }}>Tasks</NavLink>
                        </div>
                        <div className={'d-inline p-2 col-sm-12 col-md-4 col-lg-1'}>
                            <NavLink className={'nav-bar'} to="/contactMe" style={{ color: '#ffcc5c' }} activeStyle={{ fontWeight: "bold", color: "black" }}>Contact</NavLink>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/Task-Management-Web-App">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/tasks">
                        <Task />
                    </Route>
                    <Route path="/contactMe">
                        <Contact />
                    </Route>
                </Switch>
            </Router>

        </div>

    );
}

export default App;
