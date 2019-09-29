import React from 'react';
import css from './styles.module.css';


export default class Text extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={css.textContainer}>
                {this.props.text.split("\n").map((i,key) => {
                    return (
                        <div>
                            <div key={key}>{i}</div>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{"\n"}</div>
                        </div>   
                    );
                    }
                )}
            </div>
        )
    }
}