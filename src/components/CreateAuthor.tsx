import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
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
        <Container className='create mt-4 p-md-auto p-sm-0'>
            <Row className='p-md-auto p-sm-0'>
                <Col md={9} xs={11}>
                    <Row>
                        <Col  sm={10} xs={6} className='p-0'>
                            <h3>Create Author</h3>
                        </Col>
                        <Col sm={2} xs={6} className='closeIcon align-end p-0'>
                            <FeatherIcon className='list-icon' icon={'x-circle'}></FeatherIcon>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-end p-md-auto p-sm-0'">
                        <Col md={{ span: 11, offset: 1 }} sm={12} className='p-md-auto p-sm-0'  >
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
                </Col>

            </Row>


        </Container>
    )
}

export default CreateAuthor;