import React, { useState } from "react";
import {Col , Row} from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import Title from "./Title";

import BookList from "./BookList";
import CreateBook from "../CreateBook";
import AddBook from "./AddBook";
import { MainBook } from "../types";

type AddBookProps = {
  onAddBookClicked: () => void
}

const Books: React.FC = () => {
  // const initBooks: MainBook[] = [
  //       {name: 'Book 1'},
  //       {name: 'Book 2'},
  //       {name: 'Book 3'}
  //   ];
  
    const [books,setBooks] = useState<MainBook[] | null>(null);
 const [isFormVisible,setIsFormVisible] = useState(false);

 function AddBook(props:AddBookProps){
  return(
    <Row>
  <Col>
  <div className='add-container'>
      <FeatherIcon className='add-icon text-primary me-1' icon={'plus'} onClick={props.onAddBookClicked}> </FeatherIcon>
      <span>Add Book</span>
  </div>
  
  
</Col>
</Row>
  )
}

 const handleAddBtn = () => {
  setIsFormVisible(true);
}

const handleCanselBtn = () =>{
  setIsFormVisible(false);
}

const handleBookCreate = (addedBook : MainBook) =>{
  const allBooks: MainBook[] = books ? books.slice() : [];
  allBooks.push(addedBook);
  setBooks(allBooks);
}
  return(
    <>
    <Row className='books-section'>
        <Title/>
        <BookList books={books}/>
        
        <AddBook onAddBookClicked={handleAddBtn}/>
        {isFormVisible && <CreateBook onCanselBtn={handleCanselBtn} onBookCreated={handleBookCreate}/>}
    </Row>
    </>
  )
}

export default Books;