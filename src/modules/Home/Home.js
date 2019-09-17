import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header'
import './styles.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                this is home
                <Link to='/contactos'>Contactos</Link>
            </div>
        )
    }
}