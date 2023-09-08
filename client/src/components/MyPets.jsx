import PetCard from "./PetCard";
import { useEffect, useState} from "react";
import services from "../services/pets";


const MyPets = () => {
  const [pets, setPets] = useState([{}]);
  
  useEffect(() => {
      
      services.getMyPets(localStorage.getItem('contact')).then((result) => {
          setPets(result.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
 

  return (
    <div className="pet-card h-screen font-body">
      <div className="text-center text-2xl font-display font-semibold w-fit mx-auto bg-amber-300 px-4 py-2 my-5 rounded-full">My Pets</div>
      <div className="grid grid-flow-row md:grid-cols-3 justify-items-center gap-5 h-full p-5">
        {pets.map((pet)=><PetCard pet={pet}></PetCard>)}
      </div>  
      </div>

  );
};

export default MyPets;
