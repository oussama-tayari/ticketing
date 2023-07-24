import { Publisher, Subjects, TicketCreatedEvent } from '@senpaiorg/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}