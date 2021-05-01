import { Subjects, Publisher, PaymentCreatedEvent } from "@tokbbq/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
