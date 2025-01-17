import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';
import CharacterCardcontainer from '../CharacterCardcontainer/CharacterCardcontainer';
import { Link } from "react-router-dom";


class Home extends Component {
    render() {
        return(
          <div className="intro">
          <Card border="primary" style={{ width: '58rem' }}>
          <Card.Header className="char-title"><h2>Welcome to Character Generator!</h2></Card.Header>
          <Card.Body>
            <Card.Title>Try to get as creative as possible creating a name for your character and giving them special powers!</Card.Title>
            <Card.Text>
              Enjoy Creating your character!!!
            </Card.Text>

            <Link to={`/CharacterCardcontainer`}>
              <Button>Click here to get started</Button>
              </Link>
            
          </Card.Body>
        </Card>
        </div>
        )

    }
}

export default Home;