import { useGetAllCharactersQuery } from "./characterSlice";



const Characters = () => {

  const { data: character = [], isLoading, error} = useGetAllCharactersQuery();
  console.log(character);

  if(isLoading) {
    return <p>Loading...</p>
  }

  if(error){
    return <p>Error loading: {error}</p>
  }

  return (
    <>
    <div id="character-container">
      {isLoading && <p>Loading....</p>}

      {character && (

        character.map((toon) => (
          <div key={toon.id}>
            <h3>{toon.name}</h3>
            <h5>{toon.id}</h5>
            <img src={toon.images} />
          </div>
        )
        ))}
    </div>
    </>
  )

}

export default Characters;