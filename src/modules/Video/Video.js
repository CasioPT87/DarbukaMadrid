import React from 'react';
import css from './styles.module.css';


export default class Video extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={css.videoContainer}>
                { 
                    this.props.textHeader &&
                    <div className={css.textoHeaderContainer}>
                        {this.props.textHeader}
                    </div>
                }
                {this.props.children}
                { 
                    this.props.text &&
                    <div className={css.textoContainer}>
                        {this.props.text}
                    </div>
                }
            </div>
        )
    }
}