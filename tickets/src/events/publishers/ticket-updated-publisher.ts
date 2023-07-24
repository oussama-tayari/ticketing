import { Publisher, Subjects, TicketUpdatedEvent } from '@senpaiorg/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}