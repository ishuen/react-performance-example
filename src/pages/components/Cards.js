import React from 'react';
import { Button, Card } from 'react-bootstrap';
import logo from '../../logo.svg';

export default function Cards(props) {
  const array = [...Array(props.length).keys()];
	return(
    <>
    {array.map(() =>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )}
    </>
	);
}