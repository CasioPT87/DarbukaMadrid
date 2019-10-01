import React from 'react';
import BoardMap  from './BoardMap';
import YouTube from 'react-youtube';
import css from './styles.module.css'

export default class Board extends React.Component {

    state = {
        rythms: []
    }

    componentDidMount() {
        this.resolve()
    }

    resolve = async () => {
        const sortedBoardMap = BoardMap.sort((a, b) => a.index - b.index)
        sortedBoardMap.forEach(rythm => {
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
                        <div className={css.container} key={rythm.index}>
                            <div className={css.textContainer}>
                                <div className={css.title}>{rythm.title}</div>
                                <div className={css.text}>{rythm.text}</div>
                            </div>
                            <div className={css.assetsContainer}>
                                    <img className={css.image} src={rythm.image.default} alt={rythm.title} />

                                {rythm.videos.map((video) => {
                                    return (
                                        <div className={css.videoWrapper} key={video}>
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