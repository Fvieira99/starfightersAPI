import axios from "axios"
import { notFoundError } from "../middlewares/errorHandlerMiddleware.js"

const BASE_URL = "https://api.github.com/users"

async function getRepos(username: string){
    const repos = await axios.get(`${BASE_URL}/${username}/repos`).catch(error => {
      throw notFoundError()
    })
    return repos.data
}

async function checkIfUserExistsOnGithub(username:string){
  const user = await axios.get(`${BASE_URL}/${username}`).catch(error => {throw notFoundError()})
}


const userUtils = {
  getRepos,
  checkIfUserExistsOnGithub
}

export default userUtils