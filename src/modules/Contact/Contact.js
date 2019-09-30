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
                <Board 
                    title="este es un ritmo muy bonito"
                    text="pero bonito, bonito..."
                    images={[image]}
                    videos={['https://www.youtube.com/embed/2BVwxOrrpgQ']}
                />
            </div>
        )
    }
}