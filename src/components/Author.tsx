import React, { useState } from "react";

import { Row, Col } from "react-bootstrap";
import AuthorList from "./AuthorList";
import AuthorTitle from "./AuthorTitle";
import CreateAuthor from "./CreateAuthor";
import { MainAuthor } from './types';
import FeatherIcon from "feather-icons-react";

type AddAuthorProps = {
    onAddAuthorClicked: () => void
  }
const Author: React.FC = () => {
  const [authors, setAuthors] = useState<MainAuthor[] | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function AddAuthor(props: AddAuthorProps) {
    return (
      <Row>
        <Col className="p-0 py-3">
          <div className='add-container align-middle p-0' onClick={props.onAddAuthorClicked}>
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

  const handleBookCreate = (addedBook: MainAuthor) => {
    const allBooks: MainAuthor[] = authors ? authors.slice() : [];
    allBooks.push(addedBook);
    setAuthors(allBooks);
  }

    return (
        <Row>
            <AuthorTitle />
            <AuthorList authors={authors} />
            <AddAuthor onAddAuthorClicked={handleAddBtn} />
            {isFormVisible && <CreateAuthor onCanselBtn={handleCanselBtn} onAuthorCreated={handleBookCreate} />}
        </Row>
    )
}


export default Author;
