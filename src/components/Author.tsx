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

type AuthorProps = {
    AuthorSelect: (arr : MainAuthor[]) => void
}
const Author: React.FC<AuthorProps> = (props) => {
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

  const handleAuthorCreate = (addedAuthor: MainAuthor) => {
    const authorArray: MainAuthor[] = authors ? authors.slice() : [];
    authorArray.push(addedAuthor);
    setAuthors(authorArray);

    props.AuthorSelect(authorArray);
  }

    return (
        <Row>
            <AuthorTitle />
            <AuthorList authors={authors} />
            <AddAuthor onAddAuthorClicked={handleAddBtn} />
            {isFormVisible && <CreateAuthor onCanselBtn={handleCanselBtn} onAuthorCreated={handleAuthorCreate} />}
        </Row>
    )
}


export default Author;
function allAuthors(allAuthors: any) {
  throw new Error("Function not implemented.");
}

