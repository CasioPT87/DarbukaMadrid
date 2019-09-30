import React from 'react';
import { Image, Container, Row ,Col }  from 'react-bootstrap';
import header from '../../assets/images/General/image_top.jpg'
import css from './styles.module.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <React.Fragment>
                <Container fluid={true} className={css.container}>
                    <Image src={header} className={['mx-auto', 'd-block']} />  
                </Container>
                <Container fluid={true} className={css.underline} />
            </React.Fragment>     
        )
    }
}