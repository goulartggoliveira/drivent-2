import { getTickets, getTicketsTypes, postTickets } from "@/controllers/tickets-controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router()

ticketsRouter
.all('/*', authenticateToken)
.get('/types', getTicketsTypes)
.get('/', getTickets)
.post('/', postTickets);

export { ticketsRouter }