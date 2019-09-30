import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from '../Header/Header'
import HeaderButtons from '../HeaderButtons/HeaderButtons'
import Rythms from '../Rythms/Rythms'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Datos from '../Datos/Datos'
import css from './styles.module.css';

export default class Body extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router>
                <Header />
                <HeaderButtons />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f4f4f4'}}>
                    <div className={css.main}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/ritmos" component={Rythms}/>
                        <Route path="/contacto" component={Datos}/>
                    </div>
                </div>
                <Footer />
            </Router>   
        )
    }
}