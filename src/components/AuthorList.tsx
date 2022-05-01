import React, { Component } from 'react';
import FeatherIcon from "feather-icons-react";
import EmptyAuthor from "./EmptyAuthor";
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2'

 
const AuthorList: React.FC = () => {
 
 
    

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
                'Author has been deleted.',
                'success'
              )
            } else if ( 
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Author is safe :)',
                'error'
              )
            }
          })
      } 

    const authorData: any[] = [
        { key: 1, name: 'Author1' },
        { key: 2, name: 'Author2' },
        { key: 3, name: 'Author3' },
        { key: 4, name: 'Author4' },
        { key: 5, name: 'Author5' },
        { key: 6, name: 'Author6' },
        { key: 7, name: 'Author7' },
        { key: 8, name: 'Author8' },
    ];

    if (authorData.length != 0) {
        return (
            <Row>
                <Col className='p-0'>
                    <ol className=" list">
                        {authorData.map((item) => (
                            <li className="list-li py-1 my-1 align-middle" key={item.key}>
                                <span className='align-middle'>{item.name}</span>
                                <span className='list-end align-middle'>
                                    <FeatherIcon className='list-icon text-warning mx-2 align-middle' icon={'edit'} ></FeatherIcon>
                                    <FeatherIcon className='list-icon text-danger  align-middle' icon={'trash-2'} onClick={confirmDelete}></FeatherIcon>
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
            <EmptyAuthor />
        )

};



export default AuthorList;