import axios from 'axios';
import { useState } from "react";

const AllPokemonData = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useState({
    name:"", 
    species:'',
    img: '',
    hp:''
});
  
//   // search for the rPokemon name
  const searchPokemons = async () => {
    setIsLoading(true);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
    // console.log(res);
    setPokemons({name:search, species:res.data.species.name,img: res.data.sprites.front_default,hp:res.data.stats[0].base_stat});
    setIsLoading(false);
    
  };

//   useEffect(()=>{
      
//     searchPokemons()
      
      
//     },[])
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
             <div className="form">
                <div className="input">
                    <input className="input-filed"  placeholder='Searc Pokemon Name' value={search}disabled={isLoading}  onChange={handleChange} required/>
               
                    <input
                    disabled={isLoading || !search}
                    type="submit"
                    className='submit'
                    value="Search"
                    />
                
            </div>
            </div>
            
            </form>
            <div className="">

                {isLoading ? (<h3>Loading .....</h3>) :null}
                {!isLoading  && pokemons ?<div>
                   <h2>{pokemons.name}</h2>
                   <img src={pokemons.img} alt="" />
                    
                    </div> : <h3>please, type wright pokemon name</h3>}
            {/* {(pokemons ===null)?<h3 className='no-found'>Please, Enter Valid Meal Name and Refresh</h3> : pokemons.map(item=>{
                console.log(item)
                return (
                    <>
                    <h2>{item.name}</h2>
                    </>
                   
                )
            })} */}
            </div>
            </>
       
    );
};

export default AllPokemonData;