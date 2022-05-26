import React from 'react';
import  './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Form } from 'react-bootstrap';

export default function App(){
    return(
<div className='form'>
        <Form >
            <div className="card-img">
            <Card.Img 
            src='https://img.stackshare.io/company/166129/default_deb22bcabaff765206adf10ceda432737f609d78.png' height="100" width="5"></Card.Img> 
 </div>
  <br/>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control className="mx-3" type="email" placeholder="Enter email" /> 
    <Form.Label>Password</Form.Label>
    <Form.Control className="mx-3" type="password" placeholder="Password" />
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control className="mx-3" type="password" placeholder="Confirm Password" />
    </Form.Group>
    <br/>
  <Button className="mx-4" variant="primary" type="submit">
     Submit
  </Button>
</Form>
</div>
    )
}