import React from 'react';
import header from '../../assets/images/General/image_top.jpg'
import css from './styles.module.css'

export default class Header extends React.Component {
    
    render () {
        return(
            <div className={css.wrapper}>
                <div>
                    <img src={header} className={css.image} alt="portada"/>  
                </div>
                <div className={css.underline} />
            </div>     
        )
    }
}