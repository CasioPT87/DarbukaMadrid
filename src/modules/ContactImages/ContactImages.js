import React from 'react';
import css from './styles.module.css';
import image_1 from '../../assets/images/contacto/contacto_1.jpg'
import image_2 from '../../assets/images/contacto/contacto_2.jpg'
import image_4 from '../../assets/images/contacto/contacto_4.jpg'


export default class ContactImages extends React.Component {
    
    render() {
        return(
            <div className={css.imagesWrapper}>
                <img src={image_1} alt='Sara Moreno tocando 1' className={css.image} />
                <img src={image_2} alt='Sara Moreno tocando 2' className={css.image} />
                <img src={image_4} alt='Sara Moreno tocando 3' className={css.image} />
            </div>
        )
    }
}