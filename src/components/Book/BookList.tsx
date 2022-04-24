import React from 'react';
import {Col, Row} from "react-bootstrap";
import EmptyLabel from "./EmptyLabel";
import FeatherIcon from "feather-icons-react";

const BookList: React.FC = () => {
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
                            <FeatherIcon className='list-icon text-danger ' icon={'trash-2'}></FeatherIcon>
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