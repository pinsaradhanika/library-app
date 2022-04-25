import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Author from "../Author";
import Books from "../Book/Book";
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
                <Col md={6} sm={11}>
                    <Books/>
                    {/* insert Books UI-UX here*/}
                    {/* <Author></Author> */}

                </Col>
                <Col md={6} sm={11}>
                    <Author></Author>

                </Col>
            </Row>
        </Container>
    )
}

export default Library;