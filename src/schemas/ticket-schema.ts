import { PostTickets } from "@/protocols";
import Joi from "joi";

export const postTicketSchema = Joi.object<PostTickets>({
    ticketTypeId: Joi.number().integer().required()
})
