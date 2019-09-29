import React from 'react';
import Title from '../Title/Title'
import Image from '../Image/Image';
import Text from '../Text/Text';
import Video from '../Video/Video';
import List from '../List/List';
import css from './styles.modules.css';
import portada from '../../assets/images/Home/foto_portada.jpg';
import homeText from '../../assets/texts/homeText.js';
import { FirstVideo, FirstVideoText } from '../../assets/videos/homeVideo.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Title h4>
                    Cultura Árabe y Al-Ándalus
                </Title>
                <Image image={portada} name="portada"/>
                <Text text={homeText.text_1} />
                <Title h4>
                    MÚSICA EN AL-ÁNDALUS
                </Title>
                <Text text={homeText.text_2} />
                <Video text={FirstVideoText}>
                    <FirstVideo />
                </Video>
                <Text text={homeText.text_3} />
                <List list={['hola', 'perro']} />
            </div>
        )
    }
}