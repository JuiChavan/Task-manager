import axios from "axios"
import { settings } from "../config"

export const signup = async (username,password) => {
    const url = settings.server + '/user/signup'
    let result  = await axios.post(url , {
        username,
        password,
    })

    result=result.data
    //console.log(result)
    return result;
}


export const signin = async (username,password) => {
    const url = settings.server + '/user/signin'
    let result  = await axios.post(url , {
        username,
        password,
    })
    result=result.data
    //console.log(result)
    return result;
}