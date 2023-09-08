import services from "../services/pets"

const PetCard = (props) => {


    return(
        <div className="flex flex-col justify-between w-full md:w-1/5 max-h-80 rounded overflow-hidden bg-white shadow-xl">
          <img
            className="h-1/2 w-full object-cover object-top"
            src={`http://localhost:3001/uploads/${props.pet.img_url}`}
            alt=""
            srcSet=""
          />

          <div className="flex flex-col px-6 py-4">
          <div className="rounded-full self-end w-fit  bg-amber-400 px-2 py-0.5 text-sm">{`${props.pet.age_y}y ${props.pet.age_m}mo`}</div>

            <div className="flex items-center justify-between">
              <h3 className="font-bold text-2xl">{props.pet.p_name}</h3>
            </div>

            <div className="description">{props.pet.description}</div>
            
          </div>
          <div className="h-content flex flex-row p-2 gap-5 justify-center bg-amber-400">
            <div className="">Dewormed ✅</div>
            <div className="">Vaccinated ✅</div>
            </div>
        </div>
    )
}

export default PetCard