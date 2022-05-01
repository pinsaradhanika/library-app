import React from 'react';
import {Col, Row} from "react-bootstrap";
import EmptyLabel from "./EmptyLabel";
import FeatherIcon from "feather-icons-react";
import Swal from 'sweetalert2'

const BookList: React.FC = () => {


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

    const books: any[] = [
        {id:1 , name: 'Book 1'},
        {id:2 , name: 'Book 2'},
        {id:3 ,name: 'Book 3'}
    ];
if(books.length != 0){
    return (
        <ol className='book-list'>
            <li> {
                books.map((bookNames) => (

                    <Row className='single-book me-5 mt-2 my-1 p-1'>
                        <Col xs={9}>
                            <label> {bookNames.id}. {bookNames.name}</label>
                        </Col>
                        <Col xs={3} className='icon-container text-end'>
                            <FeatherIcon className='list-icon text-warning mx-2' icon={'edit'}></FeatherIcon>
                            <FeatherIcon className='list-icon text-danger ' icon={'trash-2'} onClick={confirmDelete}></FeatherIcon>
                        </Col>
                    </Row>

                ))
            }
            </li>
        </ol>
    );
}
else
    return (
        <EmptyLabel/>
    )

};

export default BookList;