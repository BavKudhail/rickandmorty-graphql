import React from "react";
import "./CharacterList.css";
import useCharacters from "../hooks/useCharacters";

const CharactersList = () => {
  // specify query we want to execute - is this true or not
  const { data, loading, error } = useCharacters();

  //   if loading return spinner
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Oops! my bad!</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((character) => {
        return (
          <div className="characterContainer">
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
