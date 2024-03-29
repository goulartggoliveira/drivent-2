import { notFoundError } from '@/errors';
import { PostTicketsParams } from '@/protocols';
import { enrollmentRepository, ticketsRepository } from '@/repositories';

export async function getTicketsTypes() {
  const ticketTypes = await ticketsRepository.getTicketsTypes();
  return ticketTypes;
}

export async function getTickets(userId: number) {
  //inscrição
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  //status de erro 404
  if (!enrollment) throw notFoundError();

  const ticket = await ticketsRepository.getTickets(enrollment.id);
  //status de erro 404
  if (!ticket) throw notFoundError();

  return ticket;
}

export async function postTickets(userId: number, ticketTypeId: number) {
  //inscrição
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  //status de erro 404
  if (!enrollment) throw notFoundError();

  const ticketParams: PostTicketsParams = {
    ticketTypeId,
        enrollmentId: enrollment.id,
        status: 'RESERVED'
  }
  const ticket = await ticketsRepository.postTickets(ticketParams)
  return ticket
}

export const ticketServices = {
  getTicketsTypes,
  getTickets,
  postTickets,
};
