import React from "react";
// import query
import { GET_CHARACTER } from "../utils/queries";
import { useQuery } from "@apollo/client";

export const useCharacter = (id) => {
  const { error, data, loading } = useQuery(GET_CHARACTER, {
    //   pass in ID as a variable
    variables: {
      id,
    },
  });
  return {
    error,
    data,
    loading,
  };
};

export default useCharacter;
