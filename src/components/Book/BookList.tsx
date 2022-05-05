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

      <Row>
      <Col className='p-0'>
          <ol className=" list">
              {
               books.map((bookNames) => (
                  <li className="list-li py-1 my-1 align-middle" key={bookNames.id}>
                      <span className='align-middle'>{bookNames.name}</span>
                      <span className='list-end align-middle'>
                          <FeatherIcon className='list-icon text-warning me-2 align-middle' icon={'edit'} ></FeatherIcon>
                          <FeatherIcon className='list-icon text-danger me-3  align-middle' icon={'trash-2'} onClick={confirmDelete}></FeatherIcon>
                      </span>

                  </li>

              ))}

          </ol>
      </Col>

  </Row>
         
    );
}
else
    return (
        <EmptyLabel/>
    )

};

export default BookList;