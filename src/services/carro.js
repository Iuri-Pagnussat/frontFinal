import Axios from "axios"

export default class carro {
    static getcarro = async () => {
        return await Axios.get(`http://localhost:3000/carro`)
    }
    static setcarro= async (data) => {
        console.log(data)   
        return await Axios.post(`http://localhost:3000/carro`, data)
    }
}