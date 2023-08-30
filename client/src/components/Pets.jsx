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
      <div className="flex flex-col flex-wrap justify-around md:flex-row gap-5 p-3">
        {pets.map((pet)=><PetCard pet={pet}></PetCard>)}
      </div>  
      </div>

  );
};

export default Pets;
