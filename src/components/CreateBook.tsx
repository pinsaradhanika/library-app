import React, { FormEvent, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Swal from 'sweetalert2'
import { AuthorsArray, MainBook } from './types';
import Select from 'react-select';

type FormProps = {
  onCanselBtn: () => void
  onBookCreated: (addedBook: MainBook) => void
  SelectAuthorsName: AuthorsArray[]
  
}
const CreateBook: React.FC<FormProps> = (props) => {

  const [bookName, setBookName] = useState<string | null>(null);
  const [ISBNnum,setBookISBN] = useState<string | null>(null);
  const [authorName, setAuthorName] = useState<string | null>(null);

    const [validInput, setValidinput] = useState(false);
  //const id = useState(number);

  const handleBookNameChange = (name: string) => {
    setBookName(name);
  }

  const handleISBNChange = (bookISBN: string) => {
    setBookISBN(bookISBN);
  }

  const handleAuthorChange = (item: any) =>{
    setAuthorName(item.value);
  }


  const handleFormSubmit=(event: any)=>{
    const form=event.currentTarget;
    if(form.checkValidity()===false){
      event.preventDefault();
      event.stopPropagation();
      setValidinput(true);

    }else{

    event.preventDefault();

    if(!bookName){
      return;
    }

    if(!ISBNnum){
      return;
    }

    if(!authorName){
      return;
    }



    const book: MainBook = {
      name: bookName,
      bookISBN: ISBNnum,
      bookAuthor: authorName
    };
    props.onBookCreated(book);

    setBookName(null);
    setBookISBN(null);
    setAuthorName(null);
   //confirmAdd;

   Swal.fire({
    icon: 'success',
    title: 'Book added sucessfully!',
    timer: 1500
  })
    }
   
  

 }

  return (
    <Container className='create mt-4   '>
      <Row className=' p-md-auto p-sm-0'>

        <Col md={9} xs={11}>
          <Row>
            <Col  sm={10} xs={6} className='p-0'>
              <h3>Create Book</h3>
            </Col>
            <Col sm={2} xs={6} className='closeIcon align-end p-0'>
              <FeatherIcon className='list-icon' icon={'x-circle'} onClick={props.onCanselBtn}></FeatherIcon>
            </Col>
          </Row>
          <Row className='justify-content-md-end  p-md-auto p-sm-0'>
            <Col md={{ span: 11, offset: 1 }} sm={12} className=' p-md-auto p-sm-0'>

            <Form className='createForm' noValidate validated={validInput} onSubmit={handleFormSubmit}>
             
                <Form.Group className="mt-3 xs-2" controlId="BookTitle">
                  <Form.Label className='formLabel'>Title of the book</Form.Label>
                  <Form.Control type="text" className='inputField'
                  value={bookName? bookName:''}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                    handleBookNameChange(e.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                            Book Name is Empty.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="my-3" controlId="Isbn">
                  <Form.Label className='formLabel'>ISBN</Form.Label>
                  <Form.Control type="text" className='inputField'
                  value={ISBNnum? ISBNnum:''}
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
                    handleISBNChange(e.target.value)} required />
                     <Form.Control.Feedback type="invalid">
                                   Book ISBN is Empty.
                     </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="my-3" controlId="author">
                  <Form.Label className='formLabel'>Author</Form.Label>
                </Form.Group>

                <Select isClearable options={props.SelectAuthorsName} onChange={handleAuthorChange} />
                        
                <Col xs={12} className='text-end my-3'>
                  <Button type="submit" >Create</Button>
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
