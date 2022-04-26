import React from "react";

import { Row } from "react-bootstrap";
import AddAuthor from "./AddAuthor";
import AuthorList from "./AuthorList";
import AuthorTitle from "./AuthorTitle";

const Author: React.FC = () => {
    return (
        <Row>
            <AuthorTitle />
            <AuthorList />
            <AddAuthor />



        </Row>
    )
}


export default Author;
