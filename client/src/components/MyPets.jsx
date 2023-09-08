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
      <div className="flex flex-col flex-wrap justify-around md:flex-row gap-5 p-3">
        {pets.map((pet)=><PetCard pet={pet}></PetCard>)}
      </div>  
      </div>

  );
};

export default MyPets;
