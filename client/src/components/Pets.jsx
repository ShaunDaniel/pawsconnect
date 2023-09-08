import PetCard from "./PetCard";
import { useEffect, useState} from "react";
import services from "../services/pets";


const Pets = () => {
  const [pets, setPets] = useState([{}]);
  
  useEffect(() => {
      console.log("inside effect");
      
      services.getPets().then((result) => {
          setPets(result.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
 

  return (
    <div className="pet-card h-screen font-body">
      <div className="grid grid-flow-row md:grid-cols-3 justify-items-center gap-5 h-full p-5">
        {pets.map((pet)=><PetCard pet={pet}></PetCard>)}

      </div>  
      </div>

  );
};

export default Pets;
