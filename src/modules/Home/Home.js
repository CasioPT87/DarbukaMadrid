import React from 'react';
import Title from '../Title/Title'
import Image from '../Image/Image';
import Text from '../Text/Text';
import Video from '../Video/Video';
import css from './styles.modules.css';
import portada from '../../assets/images/Home/foto_portada.jpg';
import homeText from '../../assets/texts/homeText.js';
import { FirstVideo, FirstVideoText, FirstVideoTextHeader } from '../../assets/videos/homeVideo.js';

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
                <Text text={homeText.text} />

                <Video text={FirstVideoText} textHeader={FirstVideoTextHeader}>
                    <FirstVideo />
                </Video>
            </div>
        )
    }
}