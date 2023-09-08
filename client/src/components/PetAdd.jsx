import { useState } from "react";
import services from "../services/pets"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const PetAdd = (props) => {
  const navigate = useNavigate()
  const [pets, setPets] = useState([{}]);
  
  useEffect(() => {
    console.log(props)
    if(!localStorage.getItem('u_id')){
      navigate('/login')
    }
    services.getPets().then((result) => {
         setPets(result.data);
       })
       .catch((error) => {
         console.error(error);
       });
   }, []);
  const [petPic,setPetPic] = useState()
  

  const [newPet, setNewPet] = useState(
    {
      p_name: "",
      type: "",
      description: "",
      age_m: "",
      vaccinated: false,
      dewormed: false,
      age_y: "",
      o_name: `${localStorage.getItem('u_name')}`,
      o_num: `${localStorage.getItem('contact')}`,
    },
  );

  const handleInputChange = (e) => {
    const a_name = e.target.name
    const value = e.target.value
    setNewPet({...newPet,[a_name]:value })
  };

  const handleFormSubmit = (e) => {
    let formData = new FormData()
    for(let key in newPet){
      formData.append(key,newPet[key])
    }
    formData.append("img_url",`${newPet.p_name}_${newPet.o_num}.jpg`)
    formData.append("img_upload",petPic)
    services.addPet(formData).then((result) => {
      if(result){
        navigate('/pets')
      }
    }).catch((err) => {
        console.log(err)
    });
    e.preventDefault()
  }

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen justify-start md:justify-around items-center">
        <div className="hidden md:flex md:object-contain md:w-7/12 md:justify-center">
          <img className="w-3/5 rounded-2xl border-l-0 border-r-8 border-b-8 border-amber-300" src="https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80" alt="" srcSet=""/>
        </div>
        
        <div className="w-4/5 md:w-1/3 max-w-auto">
          <form className="bg-amber-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 font-display" method="post" encType="multipart/form-data">
            <div className="mb-4">
                <label
                className="block text-gray-700  text-md font-bold mb-2 bg-amber-100 p-2 rounded-lg"
                htmlFor="p_name">
                Pet Name
                </label>
              <input
                className="shadow appearance-none border  w-full py-2 px-3 rounded-lg text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="p_name"
                name="p_name"
                type="text"
                placeholder="Enter Pet Name"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex mb-6 items-baseline">
              <label
                htmlFor="type"
                className="block text-gray-700  text-sm font-bold mb-2  py-1 px-3 rounded-lg bg-amber-100"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                className="block bg-white border text-sm px-3 mx-3 w-1/2 py-1 rounded-lg"
                onChange={handleInputChange}
                defaultValue={""}
              >
                <option value="">
                  Select..
                </option>
                <option value="cat">Cat</option>
                <option value="cat">Dog</option>
              </select>

              <label
                htmlFor="sex"
                className="block text-gray-700  text-sm font-bold mb-2  py-1 px-3 rounded-lg bg-amber-100"
              >
                Sex
              </label>
              <select
                id="sex"
                name="sex"
                className="block bg-white border text-sm px-3 mx-3 w-1/2 py-1 rounded-lg"
                onChange={handleInputChange}
                defaultValue={""}
              >
                <option value="" >
                  Select..
                </option>
                <option value="f">Female</option>
                <option value="m">Male</option>
              </select>
            </div>

            <div className="block text-gray-700  text-md font-bold mb-2 bg-amber-300 rounded-md  p-1">
              <label
                 className="block text-gray-700  text-md font-bold mb-2 bg-amber-100 p-2 rounded-lg"
                 htmlFor="petname"
              >
                Pet Age
              </label>
            </div>
            

            <div className="flex mb-6 items-baseline pl-2">
              <label
                htmlFor="age_m"
                className="block text-gray-700  text-sm font-bold mb-2  py-1 px-3 rounded-lg bg-amber-100"
              >
                Months
              </label>
              <select
                id="age_m"
                name="age_m"
                className="block bg-white border text-sm px-3 mx-3 w-1/2 py-1 rounded-lg"
                onChange={handleInputChange}
                defaultValue={""}

              >
                <option value="">
                  Months
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <label
                htmlFor="age_y"
                className="block text-gray-700  text-sm font-bold mb-2  py-1 px-3 rounded-lg bg-amber-100"
              >
                Years
              </label>
              <input
                type="text"
                id="age_y"
                name="age_y"
                className="block bg-white border text-sm px-3 mx-3 w-1/2 py-1 rounded-lg"
                onChange={handleInputChange}
              />
            </div>

            <div className="block text-gray-700  text-md font-bold mb-2 bg-amber-300 rounded-md  p-1">
              <label
                 className="block text-gray-700  text-md font-bold mb-2 bg-amber-100 p-2 rounded-lg"
                 htmlFor="petname"
              >
                Medical Information
              </label>
            </div>
            

            <div className="flex justify-center">
            <div className="flex mb-6 items-baseline pl-2">
              <label
                htmlFor="dewormed"
                className="block text-gray-700  text-sm font-bold mb-2  py-1 px-3 rounded-lg bg-amber-100"
              >
                Dewormed?
              </label>
              <input
                type="checkbox"
                id="dewormed"
                name="dewormed"
                className="block bg-white mx-5"
                onChange={()=>{setNewPet({...newPet, dewormed:!newPet.dewormed})}}
                defaultValue={""}
              >
              </input>
            </div>

            <div className="flex flex-row mb-6 items-baseline pl-2">

              <label
                htmlFor="vaccinated"
                className="block text-gray-700  text-sm font-bold mb-2  py-1 px-3 rounded-lg bg-amber-100"
              >
                Vaccinated?
              </label>
              <input
                type="checkbox"
                id="vaccinated"
                name="vaccinated"
                className="block bg-white mx-5"
                onChange={()=>{setNewPet({...newPet, vaccinated:!newPet.vaccinated})}}
                defaultValue={""}
              >
              </input>
              </div>
              </div>
            <div className="block text-gray-700  text-md font-bold mb-2 bg-amber-100 rounded-lg p-1">
              <p className="mx-2">Description</p>
            </div>
            <div className="flex mb-6 ">
              <textarea
                name="description"
                id="description"
                className="w-full"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="image">
              <label
                htmlFor="img_upload"
                className="block text-gray-700 bg-amber-100 p-1 pl-2 rounded-lg  text-md font-bold mb-2"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="img_upload"
                name="img_upload"
                className="text-sm bg-white w-full p-2 rounded-xl mb-2"
                onChange={(e)=>{
                  setPetPic(e.target.files[0])
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-white hover:bg-amber-100 text-gray-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleFormSubmit}
              >
                Add Pet
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PetAdd;
