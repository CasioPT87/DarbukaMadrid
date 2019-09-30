import React from 'react';
import Title from '../Title/Title'
import Image from '../Image/Image';
import Text from '../Text/Text';
import Video from '../Video/Video';
import Audio from '../Audio/Audio';
import List from '../List/List';
import css from './styles.modules.css';
import portada from '../../assets/images/Home/foto_portada.jpg';
import homeText from '../../assets/texts/homeText.js';
import { FirstVideo, FirstVideoText, SecondVideo, ThirdVideo, FourthVideo, FifthVideo } from '../../assets/videos/homeVideo.js';
import poche_1 from '../../assets/audios/homeAudios/poche_1.ogg';
import poche_2 from '../../assets/audios/homeAudios/poche_2.ogg';
import poche_3 from '../../assets/audios/homeAudios/poche_3.ogg';
import { list } from '../../assets/lists/homeList';

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
                <Title h5>Christian Poché:</ Title>
                <Audio audio={poche_1} />
                <Audio audio={poche_2} />
                <Audio audio={poche_3} />
                <Title h4>Intérpretes y compositores:</ Title>
                <List list={list.first} />
                <Video>
                    <SecondVideo />
                </Video>
                <List list={list.second} />
                <Video>
                    <ThirdVideo />
                </Video>
                <List list={list.third} />
                <Video>
                    <FourthVideo />
                </Video>
                <List list={list.fourth} />
                <Title h4>Bailarinas:</ Title>
                <List list={list.bailarinas} />
                <Video>
                    <FifthVideo />
                </Video>
            </div>
        )
    }
}