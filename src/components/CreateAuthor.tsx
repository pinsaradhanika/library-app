import React, { FormEvent, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Swal from 'sweetalert2'
import { MainAuthor } from './types';

type FormProps = {
    onCanselBtn: () => void
    onAuthorCreated: (addedAuthor: MainAuthor) => void
    
  }
const CreateAuthor: React.FC<FormProps> = (props) => {
    const [authorName, setAuthorName] = useState<string | null>(null);

  const handleAuthorNameChange = (name: string) => {
    setAuthorName(name);
  }

  const handleFormSubmit=(event: FormEvent)=>{
    event.preventDefault();

    if(!authorName){
      return;
    }

    const author: MainAuthor = {
      name: authorName,
    };
    props.onAuthorCreated(author);

    setAuthorName(null);
  
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
                            <FeatherIcon className='list-icon' icon={'x-circle'} onClick={props.onCanselBtn}></FeatherIcon>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-end p-md-auto p-sm-0'">
                        <Col md={{ span: 11, offset: 1 }} sm={12} className='p-md-auto p-sm-0'  >
                            <Form className='createForm' onClick={handleFormSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className='formLabel'>Name of Author</Form.Label>
                                    <Form.Control type="text" className='inputField'
                                        value={authorName? authorName:''}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                                            handleAuthorNameChange(e.target.value)} required />
                                </Form.Group>
                                <div className='formButtonContain'>
                                    <Button className='formButton' variant="primary" type="submit">
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