import React from 'react';
import css from './styles.module.css';



export default class Title extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={css.title_container}>
                <h3 className={css.title}>{this.props.children}</h3>  
            </div> 
        )
    }
}