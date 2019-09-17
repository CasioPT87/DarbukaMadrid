import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header/Header'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import './styles.css';



export default class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router>
                <Header />
                <div className="main">
                    <Route exact path="/" component={Home}/>
                    <Route path="/contactos" component={Contact}/>
                </div>
            </Router>   
        )
    }
}