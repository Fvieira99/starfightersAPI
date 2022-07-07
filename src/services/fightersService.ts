import { conflictError, notFoundError, unprocessableEntityError} from "../middlewares/errorHandlerMiddleware.js"
import userUtils from "../utils/userUtils.js";
import fightersRepository from "../repositories/fightersRepository.js"

async function checkFighters(firstUser:string, secondUser:string){
  //Verificar se os usuarios são iguais.
  if(firstUser === secondUser) throw conflictError()

  //Verificar se usuarios existem no github
  await userUtils.checkIfUserExistsOnGithub(firstUser);
  await userUtils.checkIfUserExistsOnGithub(secondUser);
 
  const firstFighter = await fightersRepository.getFighterByName(firstUser)
  if(!firstFighter.rows[0]){
    await fightersRepository.addNewFighter(firstUser)
  }
  const secondFighter = await fightersRepository.getFighterByName(secondUser)
  if(!secondFighter.rows[0]){
    await fightersRepository.addNewFighter(secondUser)
  }
}

async function getFightersRanking(){
  const ranking = await fightersRepository.getFightersRanking()
  return ranking.rows
}



const fightersService = {
  checkFighters,
  getFightersRanking
}

export default fightersService