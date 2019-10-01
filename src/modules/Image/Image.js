import React from 'react';
import css from './styles.module.css';


export default class Image extends React.Component {
    
    render() {
        return(
            <div className={css.imageContainer}>
                <img src={this.props.image} alt={this.props.name} className={css.image} />
            </div>
        )
    }
}