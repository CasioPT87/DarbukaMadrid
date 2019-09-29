import React from 'react';
import cx from 'classnames'
import css from './styles.module.css';



export default class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={css.wrapper}>
                { this.props.list.map((line, index) => {
                    const even = index % 2
                    return (
                        <div className={cx(css.line, even ? css.even : css.odd)}>{line}</div>
                    )
                })
                }
            </div>
        )
    }
}