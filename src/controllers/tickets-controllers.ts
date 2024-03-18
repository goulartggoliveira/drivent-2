import { Response } from "express";
import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import { ticketServices } from "@/services";
import { PostTickets } from "@/protocols";


export async function getTicketsTypes(req: AuthenticatedRequest, res: Response){
    const ticketTypes = await ticketServices.getTicketsTypes()
    return res.status(httpStatus.OK).send(ticketTypes)

}

export async function getTickets(req: AuthenticatedRequest, res: Response){
const { userId } = req
const ticket = await ticketServices.getTickets(userId)
return res.status(httpStatus.OK).send(ticket)
}

export async function postTickets(req: AuthenticatedRequest, res: Response){
    const { userId } = req
    const { ticketTypeId } = req.body as PostTickets
    const ticket = await ticketServices.postTickets(userId, ticketTypeId)
    return res.status(httpStatus.CREATED).send(ticket)
}