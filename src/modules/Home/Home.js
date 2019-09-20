import React from 'react';
import Title from '../Title/Title'
import { Link } from "react-router-dom";
import { Button, Container, Row ,Col }  from 'react-bootstrap';
import css from './styles.modules.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Title>
                    Title del Home
                </Title>
                Esto es el home
            </div>
        )
    }
}