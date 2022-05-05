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
    <Container className='create mt-4  p-md-auto p-sm-0'>
      <Row className=' p-md-auto p-sm-0'>

        <Col md={9} xs={11}>
          <Row>
            <Col  sm={10} xs={6} className='p-0'>
              <h3>Create Book</h3>
            </Col>
            <Col sm={2} xs={6} className='closeIcon align-end p-0'>
              <FeatherIcon className='list-icon' icon={'x-circle'}></FeatherIcon>
            </Col>
          </Row>
          <Row className='justify-content-md-end  p-md-auto p-sm-0'>
            <Col md={{ span: 11, offset: 1 }} sm={12} className=' p-md-auto p-sm-0'>
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
      </Row>
    </Container>
  )
}

export default CreateBook;
