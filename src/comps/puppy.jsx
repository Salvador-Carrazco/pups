 import { useState, useEffect } from 'react';


 const GetPuppies = () => {
  
    const [puppies, setPuppies] = useState([])
     useEffect(() => {
     
             
            async function fetchpuppies() {
                try { const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`)
                 const results = await response.json()
                 console.log(results.data.players)
                 setPuppies(results.data.players)
                

             }catch (error) {
                 console.log(error)

             }

         }

        fetchpuppies()
     },[])


     return (
            <>
           
            <div className="cards">
             {puppies.map((pups)=> {
                return  <div className='dogs'>
                   <img src={pups.imageUrl} alt="puppy pictures" width={150} height={150} />
                    <h2 key={pups.name}>{pups.name} </h2>
                    </div>
             })}
            </div>
            </>
     )


 }


export default GetPuppies;