import { prisma } from '@/config';
import { PostTicketsParams } from '@/protocols';
import { Ticket } from '@prisma/client';

export async function getTicketsTypes() {
  const result = await prisma.ticketType.findMany();
  return result;
}

export async function getTickets(enrollmentId: number): Promise<Ticket> {
  const result = await prisma.ticket.findUnique({
    where: {  enrollmentId  },
    include: { TicketType: true }
  });
  return result;
}

export async function postTickets(ticket: PostTicketsParams) {

  const result = await prisma.ticket.create({
    data: ticket,
    include: {TicketType: true}
  })
  
  return result

}

export const ticketsRepository = {
  getTicketsTypes,
  getTickets,
  postTickets,
};

