import { Subjects, Publisher, OrderCancelledEvent } from "@senpaiorg/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
