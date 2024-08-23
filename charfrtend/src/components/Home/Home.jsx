
import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return(
          <Card border="primary" style={{ width: '18rem' }}>
          <Card.Header>Welcome!</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Enjoy Creating your character!!!
            </Card.Text>
          </Card.Body>
        </Card>
        )

    }
}

export default Home;