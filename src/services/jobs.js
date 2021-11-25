import axios from "axios"

const baseUrl= "https://nameless-springs-73325.herokuapp.com/api/jobs"

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newJob =>{
    const request = axios.post(baseUrl,newJob)
    return request.then(response => response.data) 
}

const update = (id, newData) =>{
    const request = axios.put(`${baseUrl}/${newData}`,newData)
    return request.then(response => response.data)  
}


export default { getAll, create, update }

