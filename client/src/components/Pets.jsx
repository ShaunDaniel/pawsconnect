import PetCard from "./PetCard";

const Pets = (props) => {
  return (
    <div className="pet-card h-screen font-body">
      <div className="flex flex-col flex-wrap justify-around md:flex-row gap-5 p-3">
        {props.pets.map((pet)=><PetCard pet={pet}></PetCard>)}
      </div>  
      </div>

  );
};

export default Pets;
