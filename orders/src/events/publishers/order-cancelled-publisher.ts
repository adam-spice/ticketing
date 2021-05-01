import { Subjects, Publisher, OrderCancelledEvent } from "@tokbbq/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
