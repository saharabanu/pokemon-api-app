
const Card = ({pokemon}) => {
    
    return (
            <div className="flex flex-wrap justify-center">
                <div className="flex flex-col justify-center bg-white rounded-lg shadow-md lg:w-3/12  m-6 overflow-hidden sm:w-full">
                   <h2 className="text-center py-2 text-xl font-bold">{pokemon.name}</h2>
                   <div className="flex justify-center">
                   <img src={pokemon.img} alt="" className="w-6/12 "/>
                   </div>
                   <div className="text-center pb-10">
                   <h4>Species Name: {pokemon.species}</h4>
                   <h4>Stats Name: {pokemon.hp}</h4>
                   <h4>Ability: {pokemon.ability}</h4>
                   <h4>WEight: {pokemon.weight}</h4>
                   <h4>Base-Experience: {pokemon.base_experience}</h4>
                   <h4>Version Name: {pokemon.game}</h4>
                   </div>
                   
                    
                </div> 
                
            </div>
    );
};

export default Card;