import React from 'react';
import css from './styles.module.css';


export default class Text extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={css.textContainer}>
                {this.props.text}
            </div>
        )
    }
}