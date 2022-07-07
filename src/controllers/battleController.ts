import { Request, Response } from "express";
import battleService from "../services/battleService.js";
import fightersService from "../services/fightersService.js"

export async function battle(req: Request, res: Response){
    const {firstUser, secondUser} = req.body;
    await fightersService.checkFighters(firstUser, secondUser)
    const result = await battleService.battle(firstUser, secondUser)
    res.send(result)
}