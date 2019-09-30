import React from 'react';
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
                        <a className={css.button} href="/contactos">Webs Amigas</a>   
                        <a className={css.button} href="https://www.facebook.com/profile.php?id=100010358526069">Facebook</a>    
                        <a className={css.button} href="https://www.youtube.com/channel/UCYxXTkdImbDUvFGAgQNMlBw">Canal de Youtube</a>
                    </div>
                    <div className={css.footerSecondCol}>
                        <a className={css.button} href="/contactos">Contactos!!!</a>   
                        <a className={css.button} href="/contactos">Contactos!!!</a>    
                        <a className={css.button} href="/contactos">Contactos!!!</a>
                    </div>
                </div>
                
            </div>
        )
    }
}