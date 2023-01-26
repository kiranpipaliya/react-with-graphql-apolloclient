import React from 'react';
import { gql, useQuery } from '@apollo/client';
const GET_CHARECTERS = gql`
  query characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
const useCharecterList = () => {
  const { error, data, loading } = useQuery(GET_CHARECTERS);
  return { error, data, loading };
};

export default useCharecterList;
