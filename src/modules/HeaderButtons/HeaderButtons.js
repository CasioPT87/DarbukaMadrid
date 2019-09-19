import React from 'react';
import { Button, Container, Row ,Col }  from 'react-bootstrap';
import header from '../../assets/images/General/header.jpg'
import css from './styles.module.css'

export default class HeaderButtons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Container fluid={true} className={css.container}>
                <Row>
                    <Col>
                        <Button href="/contactos">Contactos!!!</Button>
                    </Col>
                    <Col>
                        <Button href="/contactos">Contactos!!!</Button>
                    </Col>
                    <Col>
                        <Button href="/contactos">Contactos!!!</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}