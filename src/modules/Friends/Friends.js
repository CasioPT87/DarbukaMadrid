import React from 'react';
import css from './styles.module.css';
import Title from '../Title/Title'

export default class Friends extends React.Component {
    
    render() {
        return(
            <div className={css.container}>
                <Title h5>
                    Te recomendamos las siguientes páginas amigas
                </Title>
                <div className={css.linksContainer}>
                    <a href='https://www.orienteoccidente.es/'>www.orienteoccidente.es</a>
                    <a href='http://www.maqamworld.com/en/index.php'>www.maqamworld.com</a>
                    <a href='http://www.rosamondaray.com/'>www.rosamondaray.com</a>
                    <a href='http://www.clickforclass.com/'>www.clickforclass.com</a>
                </div>
            </div>
        )
    }
}