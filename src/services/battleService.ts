import db from "../config/db.js";
import { conflictError, notFoundError, unprocessableEntityError} from "../middlewares/errorHandlerMiddleware.js"
import userUtils from "../utils/userUtils.js";
import battleUtils from "../utils/battleUtils.js";
import fightersRepository from "../repositories/fightersRepository.js";


async function battle(firstUser: string, secondUser:string){
  
  //Buscar Repositorios
  const firstUserRepos = await userUtils.getRepos(firstUser)
  const secondUserRepos = await userUtils.getRepos(secondUser)

  const firstUserReposStarCount = battleUtils.countStars(firstUserRepos);
  const secondUserReposStarCount = battleUtils.countStars(secondUserRepos);
  let battleResult: object;
  

  if(firstUserReposStarCount > secondUserReposStarCount){
    battleResult = battleUtils.firstUserWins(firstUser, secondUser)
    await fightersRepository.updateFighterStatistics("wins", firstUser)
    await fightersRepository.updateFighterStatistics("losses", secondUser)
  } 
  
  else if (firstUserReposStarCount < secondUserReposStarCount){
    battleResult = battleUtils.secondUserWins(firstUser, secondUser)
    await fightersRepository.updateFighterStatistics("losses", firstUser)
    await fightersRepository.updateFighterStatistics("wins", secondUser)
  } 
  
  else {
    battleResult = battleUtils.resultIsDraw()
    await fightersRepository.updateFighterStatistics("draws", firstUser)
    await fightersRepository.updateFighterStatistics("draws", secondUser)
  }


  return battleResult

}

const battleService = {
  battle

};

export default battleService;


  
  