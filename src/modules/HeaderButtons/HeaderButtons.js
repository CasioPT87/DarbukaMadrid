import React from 'react';
import { Link } from "react-router-dom";
import css from './styles.module.css'

export default class HeaderButtons extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={css.wrapper}>
                <div className={css.container}>
                    <Link style={{ textDecoration: 'none' }} to="/" >
                        <div className={css.button}>
                            MÚSICA ÁRABE Y ANDALUSÍ
                        </div>
                    </Link>   
                    <Link style={{ textDecoration: 'none' }} to="/ritmos">
                        <div className={css.button}>
                            RITMOS
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/contacto">
                        <div className={css.button}>
                            CLASES DE DARBUKA
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}