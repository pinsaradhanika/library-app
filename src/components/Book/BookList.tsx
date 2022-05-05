import React, { useState } from 'react';
import {Col, Row} from "react-bootstrap";
import EmptyLabel from "./EmptyLabel";
import FeatherIcon from "feather-icons-react";
import Swal from 'sweetalert2'
import { MainBook } from '../types';
import Book from './Book';

type BookListProps = {
  books: MainBook[] | null
}
type BookProps = {
  id:number
  bookName:string
}
function BookItem(props:BookProps){
  const {id,bookName} = props;
  return(
    <>
    <Row>
      
       
    <Col xs={9} className='list'>
      <label> {id}. {bookName} </label>
    </Col>

    <Col xs={3} className='list-end align-middle'>
        <FeatherIcon className='list-icon text-warning me-2 align-middle' icon={'edit'}></FeatherIcon>
        <FeatherIcon className='list-icon text-danger me-3  align-middle' icon={'trash-2'}></FeatherIcon>
      </Col>
      
      
      </Row>
      </>
  )
}

const BookList: React.FC<BookListProps>= (props) => {

  const {books} = props;

    const confirmDelete = () => {  
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success m-1',
              cancelButton: 'btn btn-danger m-1'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Book has been deleted.',
                'success'
              )
            } else if ( 
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Book is safe :)',
                'error'
              )
            }
          })
      } 

    // const books: any[] = [
    //     {id:1 , name: 'Book 1'},
    //     {id:2 , name: 'Book 2'},
    //     {id:3 ,name: 'Book 3'}
    // ];
  
    //const [books] = useState(initBooks);

    
    const renderBooks = () => {
      if(!books){
        return;
      }
       return books.map((book: MainBook, index: number) =>
       <li className="list-li py-1 my-1 align-middle" key={index}>
         <BookItem id={index+1}
                      bookName={book.name}/>
             </li>
       )
    }

    return(
      <Col>
     {(!books || books.length ===0) && <EmptyLabel/>}
        <ul className='list-unstyled'>
          <div className='list'>
     {renderBooks()}
     </div>
     </ul>
     </Col>
    )
    };
     
   

export default BookList;

function initBooks(initBooks: any): [any] {
  throw new Error('Function not implemented.');
}
