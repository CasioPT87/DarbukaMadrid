import React from 'react';
import Title from '../Title/Title'
import Image from '../Image/Image';
import Text from '../Text/Text';
import css from './styles.modules.css';
import portada from '../../assets/images/Home/foto_portada.jpg';
import homeText from '../../assets/texts/homeText.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Title>
                    Title del Home
                </Title>
                <Image image={portada} name="portada"/>
                <Text text={homeText.text} />
            </div>
        )
    }
}