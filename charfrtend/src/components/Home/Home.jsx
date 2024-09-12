import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCardcontainer';
import "./Home.css";

class Home extends Component {
    render() {
        return(
          <Card border="primary" style={{ width: '58rem' }}>
          <Card.Header>Welcome!</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Enjoy Creating your character!!!
            </Card.Text>
            <Button href= "CharacterCard">Click here to create</Button>
          </Card.Body>
        </Card>
        )

    }
}

export default Home;