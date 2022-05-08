import React from "react";
import {Col,Row,Image} from 'react-bootstrap';
import splashimage from '../assets/images/splashimage.jpg'


//this WelcomeScreen will inherit to the Library.tsx in view folder
const WelcomeScreen: React.FC = () =>{
     return (
    //     <Container fluid={true}>
    //         <Row>
    //         <Col xs={12}>

            <Row className='splash'>
                <Col xs={12} className='my-2'>
                    <h1>My Library</h1>
                </Col>
                <Col xs={12} className='px-0 splash-img'>
                    <Image src={splashimage} />
                </Col>
                <Col xs={12} className='imagetag text-md-end text-center pe-md-5'>
                <p className="pe-md-5">photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Anna Hunko</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash</a></p>
    
                </Col>
            </Row>
            // </Col>
            // </Row>
        // </Container>
    )
}
      

export default WelcomeScreen;
