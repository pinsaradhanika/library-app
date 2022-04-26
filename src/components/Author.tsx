import React from "react";
import { Col, Row } from "react-bootstrap";
import AuthorList from "./AuthorList";

const Author: React.FC = () => {
    return (
        <Row>
            <Row className="py-3 ">
                <Col className="p-0 brd-bottom">
                    <h2 className="pl-0 ">Authors</h2>
                </Col>
            </Row>
            <Row>
                <AuthorList />
            </Row>

        </Row>
    )
}
 

export default Author;
