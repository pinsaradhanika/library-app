import React, { useState } from "react";
import {Col , Row} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import Title from "./Title";

import BookList from "./BookList";
import CreateBook from "../CreateBook";
import AddBook from "./AddBook";

const Books: React.FC = () => {


  return(
    <Row className='books-section'>
        <Title/>
        <BookList/>
        <AddBook/>
    </Row>
  )
}

export default Books;