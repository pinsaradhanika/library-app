import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import Title from "./Title";

import BookList from "./BookList";
import CreateBook from "../CreateBook";
import { AuthorsArray, MainBook } from "../types";

type AddBookProps = {
  onAddBookClicked: () => void
}

type BookProps = {
  AuthorsName: AuthorsArray[]
  
}

const Books: React.FC<BookProps> = (props) => {
  // const initBooks: MainBook[] = [
  //       {name: 'Book 1'},
  //       {name: 'Book 2'},
  //       {name: 'Book 3'}
  //   ];

  const [books, setBooks] = useState<MainBook[] | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function AddBook(props: AddBookProps) {
    return (


      <Row>
        <Col className="p-0 py-3">
          <div className='add-container align-middle p-0' onClick={props.onAddBookClicked}>
            <FeatherIcon className='add-icon align-middle me-2' icon={'plus'}> </FeatherIcon>
            <span className="align-middle">Add Book</span>
          </div>
        </Col>
      </Row>

    )
  }

  const handleAddBtn = () => {
    setIsFormVisible(true);
  }

  const handleCanselBtn = () => {
    setIsFormVisible(false);
  }

  const handleBookCreate = (addedBook: MainBook) => {
    const allBooks: MainBook[] = books ? books.slice() : [];
    allBooks.push(addedBook);
    setBooks(allBooks);
  }
  return (
    <Row  >
      <Title />
      <BookList books={books} />

      <AddBook onAddBookClicked={handleAddBtn} />
      {isFormVisible && <CreateBook onCanselBtn={handleCanselBtn} onBookCreated={handleBookCreate} SelectAuthorsName={props.AuthorsName} />}
      
    </Row>
  )
}

export default Books;