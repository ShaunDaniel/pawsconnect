
const PetCard = (props) => {


    return(
        <div className="flex flex-col justify-between w-full md:w-1/5 max-h-96 rounded overflow-hidden bg-white shadow-xl">
          <img
            className="h-1/2 w-full object-cover object-top"
            src={`http://localhost:3001/uploads/${props.pet.img_url}`}
            alt=""
            srcSet=""
          />

          <div className="flex flex-col px-6">

            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-2xl">{props.pet.p_name}</h3>
          <div className="rounded-full self-end w-fit  bg-amber-400 px-2 py-0.5 text-sm">{`${props.pet.age_y}y ${props.pet.age_m}mo`}</div>

            </div>

            <div className="description">{props.pet.description}</div>
            <div className="self-end">
            <div className="">{props.pet.dewormed ? "Dewormed ✅" : ""}</div>
            <div className="">{props.pet.vaccinated ? "Vaccinated ✅" : ""}</div>
            </div>
            
          </div>
          <div className="h-content flex flex-row p-2 gap-5 justify-center bg-amber-400">
            <div className="self-end bg-amber-100 px-2 rounded-full">{props.pet.o_name} - {props.pet.o_num}</div>
            </div>
        </div>
    )
}

export default PetCard