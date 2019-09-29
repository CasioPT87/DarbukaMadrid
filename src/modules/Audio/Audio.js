import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import { Button, Container, Row ,Col }  from 'react-bootstrap';
import header from '../../assets/images/General/header.jpg'
import css from './styles.module.css'

export default class Audio extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <AudioPlayer
                src={this.props.audio}
            />
        )
    }
}