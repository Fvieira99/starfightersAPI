import db from "../config/db.js";

async function getFighterByName(name: string){

  return db.query(`
    SELECT * FROM fighters 
    WHERE username = $1
  
  `, [name])

}

async function getFightersRanking(){
  return db.query(`
    SELECT username, wins, losses, draws FROM fighters
    ORDER BY wins
    DESC, draws DESC
  `)
}

async function addNewFighter(name: string){
  return db.query(`
    INSERT INTO fighters (username, wins, losses, draws) 
    VALUES ($1, 0, 0, 0)
  `, [name])
}

async function updateFighterStatistics( set: string, name:string){
  return db.query (`
    UPDATE fighters SET ${set} = ${set} + 1
    WHERE username = $1
  
  `,[name])
}

const fightersRepository = {
  getFighterByName,
  getFightersRanking,
  addNewFighter,
  updateFighterStatistics

}

export default fightersRepository