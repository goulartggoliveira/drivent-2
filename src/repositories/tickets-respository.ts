import { prisma } from '@/config';
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

export async function postTickets() {}

export const ticketsRepository = {
  getTicketsTypes,
  getTickets,
  postTickets,
};
