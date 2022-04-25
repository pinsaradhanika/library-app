import React from "react";
import {Col , Row} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import Title from "./Title";

import BookList from "./BookList";

const Books: React.FC = () => {
  return(
    <Row className='books-section'>
        <Title/>
        <BookList/>
        <Col>
            <div className='add-book-container'>
                <FeatherIcon className='add-icon text-primary me-1' icon={'plus'}> </FeatherIcon>
                <label>Add Book</label>
            </div>
        </Col>
    </Row>
  )
}

export default Books;