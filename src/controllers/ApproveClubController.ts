import { ApproveClubService } from "@services/ApproveClubService";
import { Request, Response } from "express";


class ApproveClubController{
    async handle(req: Request, res: Response){
        const user = req.user_id

        const { club_id } = req.body

        const approveClubService = new ApproveClubService

        const approve = approveClubService.execute({ user , club_id})

        return res.json(approve)
    }
}

export { ApproveClubController }