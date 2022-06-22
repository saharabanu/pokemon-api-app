import axios from 'axios';
import { useState } from "react";
import Error from '../../../Error/Error';
import Card from '../../Card/Card';

const AllPokemonData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [pokemons, setPokemons] = useState({
    name:"", 
    species:'',
    img: '',
    hp:'',
    ability:'',
    type:'',
    weight:'',
    base_experience:'',
    game:'',
});
  
//   // search for the rPokemon name
  const searchPokemons = async () => {
    setIsLoading(true);
    // setError(false);
    // try{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
    console.log(res);
    setPokemons({name:search,weight:res.data.weight ,base_experience:res.data.base_experience,species:res.data.species.name,img: res.data.sprites.front_default,hp:res.data.stats[0].base_stat,ability:res.data.abilities[0].ability.name,game:res.data.game_indices[0].version.name,
    type: res.data.types[0].type.name});
    setIsLoading(false);
    // }
    // catch(error){
    //   console.log(error);
    //   setIsLoading(false);
     

    // }
    
  };


    const handleChange = (e)=>{
      setSearch(e.target.value)
      
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      searchPokemons();
      setSearch('')
    }

    
    return (
       
          <>
        
           <form onSubmit={ handleSubmit}>
             <div className=" lg:w-full text-center mt-20 mb-16 md:w-fit">
                <div className="rounded-full">
                    <input className="p-5 bg-white" style={{outline:'none'}} placeholder='Search Pokemon Name' value={search}disabled={isLoading}  onChange={handleChange} required/>
               
                    <input
                    disabled={isLoading || !search}
                    type="submit"
                    className='p-5 bg-black text-white hover:bg-blue-500 transition-all duration-500'
                    value="Search"
                    />
                
            </div>
            </div>
            
            </form>
            <div className="">

               
                {!isLoading  && pokemons ?(
                  
                <Card pokemon={pokemons}></Card> ): <Error/>}
            
            </div>
            </>
       
    );
};

export default AllPokemonData;