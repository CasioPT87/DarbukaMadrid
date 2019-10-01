import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import css from './styles.module.css'

export default class Audio extends React.Component {
    
    render() {
        return(
            <div className={css.wrapper}>
                <AudioPlayer
                    src={this.props.audio}
                    className={css.audio}
                />
            </div>
        )
    }
}