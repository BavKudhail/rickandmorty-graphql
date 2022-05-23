import React from "react";
import { useQuery } from "@apollo/client";

// import query
import { GET_CHARACTERS } from "../utils/queries";

const CharactersList = () => {
  // specify query we want to execute
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  console.log(data);

  return <div>CharactersList</div>;
};

export default CharactersList;
