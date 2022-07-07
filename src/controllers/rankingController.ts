import {Request, Response} from "express"
import fightersService from "../services/fightersService.js"

export async function getRanking(req: Request, res: Response){
    const ranking = await fightersService.getFightersRanking()
    res.send(ranking)
}