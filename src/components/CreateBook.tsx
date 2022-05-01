import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Swal from 'sweetalert2'

 const CreateBook: React.FC = () => {

  const confirmAdd = () => {   
    Swal.fire({
      icon: 'success',
      title: 'Book added sucessfully!', 
      timer: 1500
    })
  } 

  return (
   <Container className='create'>
    <Col xs={10}  className='bookCreate mt-5'>
      <Row>
        <Col xs={10} >
          <h3>Create Book</h3>
        </Col>
      <Col xs={1}>
        <FeatherIcon className='list-icon' icon={'x-circle'}></FeatherIcon>
      </Col>

      <Col xs={{span:10,offset:1}} clasName='md-4'>
        <Form className='createForm'> 
        <Form.Group className="mt-3 xs-2" controlId="BookTitle">
        <Form.Label className='formLabel'>Title of the book</Form.Label>
        <Form.Control type="text" className='inputField' />
        </Form.Group>
        <Form.Group className="my-3" controlId="Isbn">
        <Form.Label className='formLabel'>ISBN</Form.Label>
        <Form.Control type="text" className='inputField' />
        </Form.Group>
        <Form.Group className="my-3" controlId="author">
        <Form.Label className='formLabel'>Author</Form.Label>
        <select className="inputField form-select" aria-label=".form-select-sm example">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
        </select>
        </Form.Group>               
        <Col xs={12} className='text-end my-3'>
            <Button type="submit" onClick={confirmAdd}>Create</Button>
        </Col>
        </Form>
      </Col>

      </Row>
    </Col>
  </Container>
  )
}

export default CreateBook;
