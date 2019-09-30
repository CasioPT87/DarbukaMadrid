import React from 'react';
import { Image, Container, Row ,Col }  from 'react-bootstrap';
import header from '../../assets/images/General/header.jpg'
import css from './styles.module.css'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={css.container}>
                <div className={css.textContainer}>
                    <div className={css.title}>{this.props.title}</div>
                    <div className={css.text}>{this.props.text}</div>
                </div>
                <div className={css.assetsContainer}>
                    {this.props.images.map((image) => {
                        return (
                            <img className={css.image} src={image} />
                        )
                    })}
                    {this.props.videos.map((video) => {
                        return (
                            <iframe width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        )
                    })}
                </div>
            </div>  
        )
    }
}