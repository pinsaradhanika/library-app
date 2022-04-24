import React from 'react';
import {Col} from "react-bootstrap";


const EmptyLabel: React.FC = () => {
  return(
      <Col xs={12}>
        <label className='no-books mt-3'>No Books listed here.</label>
      </Col>

  )
}

export default EmptyLabel;