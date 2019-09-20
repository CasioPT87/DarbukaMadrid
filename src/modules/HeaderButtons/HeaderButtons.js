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
            <div className={css.container}>
                <Button  className={css.button} href="/contactos">Contactos!!!</Button>   
                <Button  className={css.button} href="/contactos">Contactos!!!</Button>    
                <Button  className={css.button} href="/contactos">Contactos!!!</Button>
            </div>
        )
    }
}