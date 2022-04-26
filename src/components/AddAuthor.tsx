import { Col, Row } from "react-bootstrap";

import FeatherIcon from "feather-icons-react";

const AddAuthor = () => {
  return (
    <Row>
    <Col className="p-0 py-3">
        <div className='add-container align-middle p-0'>
            <FeatherIcon className='add-icon align-middle text-primary me-2' icon={'plus'}> </FeatherIcon>
            <span className="align-middle">Add Author</span>
        </div>
    </Col>
</Row>
  )
}

export default AddAuthor;