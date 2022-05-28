import React from "react";
// importing hook
import { useCharacter } from "../../hooks/useCharacter";

const Character = () => {
  // destructure loading, data and error from useCharacter
  const { loading, data, error } = useCharacter(5);
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Oops! my bad!</div>;

  const character = data.character;
  console.log(character);
  return (
    <>
    {/* pass in character data within the specific fields */}
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
