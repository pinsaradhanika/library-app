import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap';
import Author from './Author';
import Books from './Book/Book';

import { AuthorsArray, MainAuthor } from './types';

 const AuthorListArray: React.FC =() => {
    const [arrySelect , setArraySelect] = useState<AuthorsArray[] | null>(null)

    const AuthorSelect = (authorArr:MainAuthor[]) =>{
        for (let i=0; i<authorArr.length; i++){
            const listOfAuthors: AuthorsArray[] = arrySelect ? arrySelect.slice() : [];
            listOfAuthors.push({value:authorArr[i].name,label:authorArr[i].name});
            setArraySelect(listOfAuthors);
        }
    }

    return(

            <Row>
                <Col md={6} sm={12} className="pt-md-1 pt-5 px-md-5 ps-5  order-md-1 order-2 ">
                    <Books AuthorsName={arrySelect ? arrySelect : []}/>
                </Col>

                <Col md={6} sm={12} className="pt-md-1 pt-5 pe-md-4 px-md-5 ps-5 order-md-1 order-1 ">
                    <Author AuthorSelect={AuthorSelect}/>
                </Col>
            </Row>

    );

}

export default AuthorListArray;
