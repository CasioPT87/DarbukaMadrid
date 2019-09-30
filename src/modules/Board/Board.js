import React from 'react';
import { Image, Container, Row ,Col }  from 'react-bootstrap';
import css from './styles.module.css'

export default class Board extends React.Component {

    state = {
        images: null
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.resolve()
    }

    resolve = async () => {
        import(`../../assets/images/2tiempos/ayub.jpg`).then(image => {
            console.log(image)
            this.setState({
                images: [image]
            });
        }).catch(e => console.log(e))
    }

    render() {
        if (!this.state.images) return null
        return(
            <div className={css.container}>
                <div className={css.textContainer}>
                    <div className={css.title}>{this.props.title}</div>
                    <div className={css.text}>{this.props.text}</div>
                </div>
                <div className={css.assetsContainer}>
                     {this.state.images.map((image) => {
                        return (
                            <img className={css.image} src={image.default} />
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