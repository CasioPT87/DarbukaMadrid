import React from 'react';
import BoardMap  from './BoardMap';
import YouTube from 'react-youtube';
import css from './styles.module.css'

export default class Board extends React.Component {

    state = {
        rythms: []
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.resolve()
    }

    resolve = async () => {
        BoardMap.forEach(rythm => {
            let stateRythm = {
                ...rythm,
            }

            import(`../../assets/images/${rythm.image.folder}/${rythm.image.name}.jpg`).then(image => {
                stateRythm.image = image
                this.setState(state => {
                    return {
                        rythms: state.rythms.concat(stateRythm)
                    }
                });
            }).catch(e => console.log(e))
        })  
    }

    render() {
        if (!this.state.rythms) return null
        return(
            <div className={css.wrapper}>
                {this.state.rythms.map(rythm => {
                    return(
                        <div className={css.container}>
                            <div className={css.textContainer}>
                                <div className={css.title}>{rythm.title}</div>
                                <div className={css.text}>{rythm.text}</div>
                            </div>
                            <div className={css.assetsContainer}>
                                    <img className={css.image} src={rythm.image.default} />

                                {rythm.videos.map((video) => {
                                    return (
                                        <div className={css.videoWrapper}>
                                            <YouTube
                                                videoId={video}
                                                opts={{
                                                    width: '200',
                                                    height: '150',
                                                }}
                                            />
                                        </ div>
                                    )
                                })}
                            </div>
                        </div>  
                    )

                })}
            </div>
        )
    }
}