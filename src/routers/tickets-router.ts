import { getTickets, getTicketsTypes, postTickets } from "@/controllers/tickets-controllers";
import { authenticateToken, validateBody } from "@/middlewares";
import { postTicketSchema } from "@/schemas";
import { Router } from "express";

const ticketsRouter = Router()

ticketsRouter
.all('/*', authenticateToken)
.get('/types', getTicketsTypes)
.get('/', getTickets)
.post('/',validateBody(postTicketSchema), postTickets);

export { ticketsRouter }