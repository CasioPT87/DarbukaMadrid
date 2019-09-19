import React from 'react';
import { Link } from "react-router-dom";
import { Button, Container, Row ,Col }  from 'react-bootstrap';
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
                
                <Container className="Container">
                <Row className="Row">
                    <Col className="column" sm={8}>sm=8</Col>
                    <Col className="column" sm={4}>sm=4</Col>
                </Row>
                <Row>
                    <Col  className="column" xs md={4}>sm=true</Col>
                    <Col  className="column" xs md={4}>sm=true</Col>
                    <Col  className="column" xs={8} md={4}>sm=true</Col>
                </Row>
                </Container>
            </div>
        )
    }
}