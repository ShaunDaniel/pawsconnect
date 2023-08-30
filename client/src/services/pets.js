import axios from "axios"

const baseUrl = "http://localhost:3001/api/pets"

const addPet = petObj =>{
    return axios.post(baseUrl,petObj)
}

const getPets = () => {
    return axios.get(baseUrl)
}


const services = {addPet,getPets}
export default services 