import React from 'react';
import css from './styles.module.css';
import cx from 'classnames'



export default class Title extends React.Component {
    
    render() {
        const { topMargin, bottomMargin } = this.props
        return(
            <div className={cx(
                css.title_container,
                topMargin ? css.topMargin : '',
                bottomMargin ? css.bottomMargin : '',
                 )}>
                {this.props.h2 && <h2 className={css.title}>{this.props.children}</h2>}
                {this.props.h3 && <h3 className={css.title}>{this.props.children}</h3>}
                {this.props.h4 && <h4 className={css.title}>{this.props.children}</h4>}
                {this.props.h5 && <h5 className={css.title}>{this.props.children}</h5>}
            </div> 
        )
    }
}