import { Publisher, Subjects, TicketUpdatedEvent } from "@tokbbq/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
