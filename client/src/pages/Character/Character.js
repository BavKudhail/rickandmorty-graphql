import React from "react";
import { useCharacter } from "../../hooks/useCharacter";

const Character = () => {
  const { loading, data, error } = useCharacter(2);
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Oops! my bad!</div>;
  const character = data.character;
  console.log(character);
  return (
    <>
      <div className="character">
        <p>{character.name}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
        <img src={character.image} />
      </div>
    </>
  );
};

export default Character;
