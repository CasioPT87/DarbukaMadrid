import React from 'react';
import Title from '../Title/Title'
import Text from '../Text/Text'
import ContactImages from '../ContactImages/ContactImages'
import css from './styles.module.css'
import contactText from '../../assets/texts/contactText.js';
import image_1 from '../../assets/images/contacto/contacto_1.jpg'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Title h4>
                    Datos de Contacto
                </Title>
                <div className={css.contactWrapper}>
                    <div>C/ Olivar 36, Percusión Campos</ div>
                    <a href='http://www.percusioncampos.com'>http://www.percusioncampos.com</a>
                    <div>C/ Hermanos Gomez 57, Locales de ensayo La perrera</div>
                    <a href='http://www.localesensayo.org'>http://www.localesensayo.org</a>
                    <p>Telf: 675 38 28 42</p>
                    <p>darbukamadrid@hotmail.com</p>
                    <p>facebook : <a href='https://www.facebook.com/profile.php?id=100010358526069'>Sara Moreno</a></p>
                </div>
                <Text text={contactText.text_1} />
                <ContactImages />
            </div>
        )
    }
}