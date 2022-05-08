import React from 'react';
import FeatherIcon from "feather-icons-react";
import EmptyAuthor from "./EmptyAuthor";
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { MainAuthor } from './types';

type AuthorListProps = {
  authors: MainAuthor[] | null
}
type AuthorProps = {
  id: number
  authorName: string
}
function AuthorItem(props: AuthorProps) {
  const { id, authorName } = props;

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

  return (
    <li className="list-li py-1 my-1 align-middle" key={id}>
      <span className='align-middle'>{authorName}</span>
      <span className='list-end align-middle'>
        <FeatherIcon className='list-icon text-warning me-2 align-middle' icon={'edit'} ></FeatherIcon>
        <FeatherIcon className='list-icon text-danger me-3  align-middle' icon={'trash-2'} onClick={confirmDelete}></FeatherIcon>
      </span>
    </li>
  )
}
const AuthorList: React.FC<AuthorListProps> = (props) => {
    const { authors } = props;

    const renderAuthors = () => {
      if (!authors) {
        return;
      }
      return authors.map((author: MainAuthor, index: number) =>
        <AuthorItem id={index + 1} authorName={author.name} />
      )
    }
        return (
            <Row>
                <Col className='p-0'>
                  {(!authors || authors.length === 0) && <EmptyAuthor />}
                  <ol className='list'>
                    {renderAuthors()}
                  </ol>
                </Col>
            </Row>
        );
};

export default AuthorList;