import React from 'react';
import {Form, Button} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h1>
        
        St John's Primary School - MUGA Sponsorship
        </h1> 
      </div>
      <Form>
        <Form.Group controlId="fullName">
          <Form.Label>Please provide your full name</Form.Label>
          <Form.Control required type="text" placeholder="Enter name"/>          
          <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="childsClass">
          <Form.Label>If your child is attending St John's Primary School please select their class name, otherwise select 'I'm not in a class'. </Form.Label>
          <Form.Control as="select">
            <option>Ghana</option> 
          </Form.Control>          
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Please provide your email address </Form.Label>
          <Form.Control required type="email" />
          <Form.Control.Feedback type="invalid">
              Please enter your email address.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="nameOnCertificate">
          <Form.Label>Please provide the name you would like included on your commemorative certificate</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="nameOnSign">
          <Form.Label>Please provide the name you would like added to the commemorative sign that will be attached to the MUGA, appropriate examples include: 'The XYZ Family', 'FirstInitial Lastname', 'Firstname LastInitial' or 'Firstname Lastname', if you do not wish for your name to be added to the sign please enter 'None'</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default App;
