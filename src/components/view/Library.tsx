import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import WelcomeScreen from "../WelcomeScreen";


//WelcomeScreen will inherit to this Library.tsx
const Library: React.FC = ()=>{
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                   <WelcomeScreen/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;