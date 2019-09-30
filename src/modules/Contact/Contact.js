import React from 'react';
import image from '../../assets/images/2tiempos/ayub.jpg';
import Board from '../Board/Board'
import './styles.css';



export default class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Board />
            </div>
        )
    }
}