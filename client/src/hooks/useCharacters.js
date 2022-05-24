import { useQuery } from "@apollo/client";
// import query
import { GET_CHARACTERS } from "../utils/queries";

import React from "react";

export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  return {
    error,
    data,
    loading,
  };
};

export default useCharacters;
