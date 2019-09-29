import React from 'react';
import { Button, Container, Row ,Col }  from 'react-bootstrap';
import header from '../../assets/images/General/header.jpg'
import css from './styles.module.css'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={css.footerContainer}>
                <div className={css.footerHeader} />
                <div className={css.footerContent}>
                    <div className={css.footerFirstCol}>
                        <button  className={css.button} href="/contactos">Contactos!!!</button>   
                        <button  className={css.button} href="/contactos">Contactos!!!</button>    
                        <button  className={css.button} href="/contactos">Contactos!!!</button>
                    </div>
                    <div className={css.footerSecondCol}>
                        <button  className={css.button} href="/contactos">Contactos!!!</button>   
                        <button  className={css.button} href="/contactos">Contactos!!!</button>    
                        <button  className={css.button} href="/contactos">Contactos!!!</button>
                    </div>
                </div>
                
            </div>
        )
    }
}