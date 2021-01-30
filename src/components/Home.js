import React from 'react';
import { Component } from 'react';
import {  Container, Image, Jumbotron } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

class Home extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="background-image" style={{ backgroundImage: "url(/assets/h_van.png)" }} /> 
                <Jumbotron fluid className="jumbo">
                <Container>
                    <h1>Bienvenidos al mundo de las hamburguesas</h1>
                    <p>
                    Estamos para servirles y ayudarles a ser felices! 
                    </p>
                </Container>
                </Jumbotron>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="../../assets/h_elegante.png" />
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../../assets/h_telma.png" />
                        <Card.Body>
                        <Card.Title>Telma</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="../../assets/h_doblerelish.png" />
                        <Card.Body>
                        <Card.Title>Doble Relish</Card.Title>
                        <Card.Text>
                            This is a wider card wi
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </React.Fragment>
        );
    }
}

export default Home;
