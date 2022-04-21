import React from "react";
import { Col, Row } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';

const Author: React.FC = () => {
    return (
        <Row>
            <Row className="py-3 pl-0">
                <Col className="p-0">
                    <h2 className="pl-0 ">Authors</h2>
                    <hr />
                </Col>
            </Row>
            <Row >
                <Col>

                    <ol className="p-0 list">
                        {authorData.map((item) => (
                            <Row className="my-1 p-1 list-li">
                                <Col>
                                    <li key={item.key}><Row>
                                        <Col>
                                            <span>{item.name}</span>
                                        </Col>
                                        <Col className='text-end '>
                                            <FeatherIcon className='list-icon text-warning mx-2' icon={'edit'}></FeatherIcon>
                                            <FeatherIcon className='list-icon text-danger ' icon={'trash-2'}></FeatherIcon>
                                        </Col>

                                    </Row>


                                    </li>

                                </Col>
                            </Row>

                        ))}

                    </ol>
                </Col>


            </Row>
        </Row>
    )
}

const authorData = [
    { key: 1, name: 'Author1' },
    { key: 2, name: 'Author2' },
    { key: 3, name: 'Author3' },
    { key: 4, name: 'Author4' },
    { key: 5, name: 'Author5' },
    { key: 6, name: 'Author6' },
    { key: 7, name: 'Author7' },
    { key: 8, name: 'Author8' },
];

export default Author;
