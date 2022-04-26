import React, { useState } from "react";
import {Col , Row} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import Title from "./Title";

import BookList from "./BookList";
import CreateBook from "../CreateBook";

const Books: React.FC = () => {


  return(
    <Row className='books-section'>
        <Title/>
        <BookList/>
        <Col>
            <div className='add-container'>
                <FeatherIcon className='add-icon text-primary me-1' icon={'plus'}> </FeatherIcon>
                <span>Add Book</span>
            </div>
            
        </Col>
    </Row>
  )
}

export default Books;