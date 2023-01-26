import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useCharecter from '../hooks/useCharecter';

const Charecter = () => {
  const { id } = useParams();
  const { error, data, loading } = useCharecter(id);
  console.log('data', data);
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>error</h1>;
  return (
    <Row className='g-3'>
      <Col className='col-3' key={data.character.id}>
        <Link to='/charector'>
          <Card>
            <Card.Img variant='top' src={data.character.image} />
            <Card.Body>
              <Card.Title>{data.character.name}</Card.Title>
              {data.character.episode.map((item) => (
                <ListGroup key={item.episode}>
                  <ListGroup.Item>
                    {item.name} :: {item.episode}
                  </ListGroup.Item>
                </ListGroup>
              ))}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  );
};

export default Charecter;
