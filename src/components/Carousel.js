import React from 'react';

import Card from '../components/Card';

import github from '../assets/images/github.jpg';
import me from '../assets/images/me.jpg';
import behance from '../assets/images/behance.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subTitle: 'The developer\'s playground',
                    imgSrc: github,
                    link: 'https://github.com/dzarate999',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Daniel Zarate',
                    subTitle: 'YouTube channel **this needs to change**',
                    imgSrc: me,
                    link: 'https://www.youtube.com/channel/UCUafAlnsz0DVXYKZYyxhtCA?view_as=subscriber',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Behance',
                    subTitle: 'Online Portfolio',
                    imgSrc: behance,
                    link: 'https://danielzarate.myportfolio.com/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;