import React from 'react';
import YouTube from 'react-youtube';
import homeContacts from '../../assets/texts/homeContacts';
import Board from '../Board/Board'
import Title from '../Title/Title'
import Text from '../Text/Text'
import css from './styles.module.css'



export default class Rythms extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Title h5>
                   Ritmos
                </ Title>
                <Board />
                <Title h5>
                    Técnicas de darbuka más destacadas
                </ Title>
                <Text text={homeContacts.text_1} />
                <div className={css.videoWrapper}>
                    <YouTube 
                        videoId='WcGgd3GkE5Y'
                        opts={{
                            width: '500',
                            height: '350',
                        }}
                    />
                </div>
            </div>
        )
    }
}