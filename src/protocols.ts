import { Ticket } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type AddressEnrollment = {
  logradouro: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export type CEP = {
  cep: string;
};

export type PostTickets = {
  ticketTypeId: number
}

export type PostTicketsParams = Omit<Ticket, 'id' | 'createdAt' | 'updatedAt'>;