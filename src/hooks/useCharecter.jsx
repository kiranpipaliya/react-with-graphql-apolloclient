import React from 'react';
import { gql, useQuery } from '@apollo/client';
const GET_CHARECTER = gql`
  query GetCharecter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;
const useCharecter = (id) => {
  const { error, data, loading } = useQuery(GET_CHARECTER, {
    variables: { id },
  });
  return { error, data, loading };
};

export default useCharecter;
