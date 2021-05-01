import { Publisher, OrderCreatedEvent, Subjects } from "@tokbbq/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
