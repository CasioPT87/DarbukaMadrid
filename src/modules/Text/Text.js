import React from 'react';
import css from './styles.module.css';


export default class Text extends React.Component {
    
    render() {
        return(
            <div className={css.textContainer}>
                {this.props.text.split("\n").map((i,key) => {
                    return (
                        <div key={key+i[0]}>
                            <div>{i}</div>
                            <div style={{ whiteSpace: 'pre-wrap' }}>{"\n"}</div>
                        </div>   
                    );
                    }
                )}
            </div>
        )
    }
}