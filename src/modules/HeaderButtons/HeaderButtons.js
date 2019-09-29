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
            <div className={css.wrapper}>
                <div className={css.container}>
                    <button className={css.button} href="/">MÚSICA ÁRABE Y ANDALUSÍ</button>   
                    <button className={css.button} href="/contactos">RITMOS</button>    
                    <button className={css.button} href="/contactos">CLASES DE DARBUKA</button>
                </div>
            </div>
        )
    }
}