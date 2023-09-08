
const PetCard = (props) => {


  return (
    <div className="main-card flex flex-col-reverse md:flex-row h-full md:max-h-72 w-full drop-shadow-md">
      <div className="pet-info rounded-b-xl md:rounded-r-none  md:rounded-s-xl  flex flex-col h-full w-full md:w-1/2 bg-white p-5">
        <div className="name-sex-age flex flex-col md:flex-row justify-between h-fit md:h-1/5 my-2">
          <div className="name my-2 flex flex-col justify-around w-3/5">
            <div className="name-label text-gray-500 font-display text-sm">Pet Name</div>
            <div className="name-img flex flex-col w-full">
              <h3 className="font-semibold font-display text-2xl">{props.pet.p_name}</h3>

            </div>
          </div>
          <div className="sex-age my-2 flex gap-2 flex-row-reverse md:flex-col justify-between md:justify-around w-full md:w-2/5 items-end">
            <div className="rounded-full w-fit text-center px-3 font-bold text-sm bg-amber-300">{props.pet.age_y}y {props.pet.age_m}m</div>
            <div className="rounded-full w-fit px-3 font-bold uppercase text-sm bg-amber-300">{props.pet.sex}</div>
          </div>
        </div>
        <div className="details h-full flex flex-col justify-around">
          <div className="description my-2">
            <div className="name-label text-gray-500 font-display text-sm">Description</div>
            <h3 className=" font-display text-sm">{props.pet.description}</h3>
          </div>
          <div className="medical my-2">
            <div className=" text-gray-500 font-display text-sm">Medical Information</div>
            <div className="self-end">
              <div className="font-display italic text-sm">{props.pet.dewormed || props.pet.vaccinated ? "" : "No medical information provided"}</div>
              <div className="font-display text-sm">{props.pet.dewormed ? "Dewormed ✅" : ""}</div>
              <div className="font-display text-sm">{props.pet.vaccinated ? "Vaccinated ✅" : ""}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="petpic w-full md:w-1/2 rounded-t-xl md:rounded-l-none md:rounded-r-xl   bg-amber-400">
        <img
          className="object-cover object-center rounded-t-xl md:rounded-l-none md:rounded-r-xl w-full h-full "
          src={`http://localhost:3001/uploads/${props.pet.img_url}`}
          alt=""
          srcSet=""
        />
      </div>
    </div>
  )
}

export default PetCard