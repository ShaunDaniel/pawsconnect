import axios from "axios"

const baseUrl = "http://localhost:3001/api/pets"

const addPet = petObj =>{
    return axios.post(baseUrl,petObj)
}

export default addPet