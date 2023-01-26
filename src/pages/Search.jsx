import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

import { gql, useLazyQuery } from '@apollo/client';
const GET_SEARCH_CHAR = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;
const Search = () => {
  const [name, setName] = useState();
  const [getLocation, { error, loading, data }] = useLazyQuery(GET_SEARCH_CHAR, {
    variables: {
      name,
    },
  });
  const handleSearch = (e) => {
    setName(e.target.value);
  };
  console.log(data);
  return (
    <>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Search Charectors</Form.Label>
        <Form.Control onChange={handleSearch} type='text' placeholder='Search Here....' />
      </Form.Group>
      <button onClick={() => getLocation()}>Search</button>{' '}
      {data?.characters.results.map((item) => (
        <ListGroup className='mt-4' key={item.location.name}>
          <ListGroup.Item>{item.location.name}</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
};

export default Search;
