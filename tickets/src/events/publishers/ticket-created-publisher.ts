import { Publisher, Subjects, TicketCreatedEvent } from "@tokbbq/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
