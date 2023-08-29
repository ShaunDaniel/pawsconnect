import PetCard from "./PetCard";

const Pets = (props) => {

    const pets = [
        {
            "id":"d005",
            "name":"Pluto",
            "description":"A playful brown male indie",
            "age_m":"2",
            "age_y":"4",
            "o_name":"Shaun Daniel",
            "o_num":"9425515243",
            "img_url":"d005"
        }
    ]
  return (
    <div className="pet-card h-screen font-body">
      <div className="flex flex-col flex-wrap justify-around md:flex-row gap-8 p-5">
        <PetCard></PetCard>
        <PetCard></PetCard>
        <PetCard></PetCard>
        <PetCard></PetCard>
        <PetCard></PetCard>
      </div>  
      </div>

  );
};

export default Pets;
