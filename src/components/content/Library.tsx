import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Author from "../Author";
import Books from "../Book/Book";
import CreateAuthor from "../CreateAuthor";
import CreateBook from "../CreateBook";
import WelcomeScreen from "../WelcomeScreen";


//WelcomeScreen will inherit to this Library.tsx
const Library: React.FC = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <WelcomeScreen />
                </Col>
            </Row>
            <Row  >
                <Col md={6} sm={12} className="pt-md-1 pt-5 px-md-5 ps-5  order-md-1 order-2 ">
                    <Books/>
                    <CreateBook/>

                </Col>
                <Col md={6} sm={12} className="pt-md-1 pt-5 pe-md-4 px-md-5 ps-5 order-md-1 order-1 ">
                    <Author/>
                    <CreateAuthor />
                </Col>
            </Row> 
        </Container>
    )
}

export default Library;