import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCharecterList from '../hooks/useCharecterList';

const CharecterList = () => {
  const { error, data, loading } = useCharecterList();

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>error</h1>;

  return (
    <Row className='g-3'>
      {data.characters.results.map((item) => (
        <Col className='col-3' key={item.id}>
          <Link to={`/${item.id}`}>
            <Card>
              <Card.Img variant='top' src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default CharecterList;
