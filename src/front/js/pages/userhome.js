import React from "react";
import Card from 'react-bootstrap/Card';

export const UserHome = (props) => {
  return (
    <div className="d-flex">
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Date of birth</Card.Header>
        <Card.Body>
          <Card.Title>24 June 1990</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Header>Height</Card.Header>
        <Card.Body>
          <Card.Title>170m</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>Weight</Card.Header>
        <Card.Body>
          <Card.Title>80kg</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="danger" style={{ width: '18rem' }}>
        <Card.Header>Blood pressure</Card.Header>
        <Card.Body>
          <Card.Title>110/80mmHg</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="warning" style={{ width: '18rem' }}>
        <Card.Header>VO2 Max</Card.Header>
        <Card.Body>
          <Card.Title>45.4</Card.Title>
         
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: '18rem' }}>
        <Card.Header>Cholesterol</Card.Header>
        <Card.Body>
          <Card.Title>198</Card.Title>
         
        </Card.Body>
      </Card>
      
    </div>
  );
};
