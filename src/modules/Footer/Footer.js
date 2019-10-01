import React from 'react';
import css from './styles.module.css'
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
    
    render() {
        return(
            <div className={css.footerContainer}>
                <div className={css.footerHeader} />
                <div className={css.footerContent}>
                    <div className={css.footerFirstCol}>
                        <Link style={{ textDecoration: 'none' }} to="/amigas" >
                            <div className={css.button}>
                               Webs Amigas
                            </div>
                        </Link>  
                        <a className={css.button} href="https://www.facebook.com/profile.php?id=100010358526069">Facebook</a>    
                        <a className={css.button} href="https://www.youtube.com/channel/UCYxXTkdImbDUvFGAgQNMlBw">Canal de Youtube</a>
                    </div>
                </div>
                
            </div>
        )
    }
}