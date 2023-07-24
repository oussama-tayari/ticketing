import { Publisher, OrderCreatedEvent, Subjects } from "@senpaiorg/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
