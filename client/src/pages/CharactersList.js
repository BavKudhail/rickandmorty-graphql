import React from "react";
import { useQuery } from "@apollo/client";

// import query
import { GET_CHARACTERS } from "../utils/queries";

const CharactersList = () => {
  // specify query we want to execute - is this true or not
  const { data, loading, error } = useQuery(GET_CHARACTERS);
  //   if loading return spinner
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Oops! my bad!</div>;
  console.log({ data, error, loading });

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
