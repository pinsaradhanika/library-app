import React from 'react';
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Swal from 'sweetalert2'

const CreateAuthor: React.FC = () => {
  const confirmAdd = () => {   
    Swal.fire({
      icon: 'success',
      title: 'Author added sucessfully!', 
      timer: 1500
    })
  } 

  return (
      <Container className='create'>
            <Row>
                <Col  xs={9}>
                    <Row>
                        <Col className='formName'>Create Author</Col>
                        <Col className='closeIcon'>
                            <FeatherIcon className='list-icon' icon={'x-circle'}></FeatherIcon>
                        </Col>
                    </Row>
                    <Form className='createForm'>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='formLabel'>Name of Author</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <div className='formButtonContain'>
                            <Button className='formButton' variant="primary" type="submit" onClick={confirmAdd}>
                                Create
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
      </Container>
  )
}

export default CreateAuthor;