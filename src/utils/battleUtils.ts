function firstUserWins(firstUser:string, secondUser:string){
  return {
    winner: firstUser,
    loser: secondUser,
    draw: false
  }
}

function secondUserWins(firstUser:string, secondUser:string){
  return {
    winner: secondUser,
    loser: firstUser,
    draw: false
  }
}

function resultIsDraw(){
  return{
    winner: null,
    loser: null,
    draw: true
  }
}

function countStars(repositories: any[]){
  let count = 0
  for(let repo of repositories){
    count += repo.stargazers_count
  }
  return count;
}

const battleUtils = {
  firstUserWins,
  secondUserWins,
  resultIsDraw,
  countStars
}



export default battleUtils