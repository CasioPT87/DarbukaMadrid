import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './styles.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                this is home
                <Button href="/contactos">Contactos!!!</Button>
            </div>
        )
    }
}