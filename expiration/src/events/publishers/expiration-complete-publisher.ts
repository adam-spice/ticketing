import { Subjects, Publisher, ExpirationCompleteEvent } from "@tokbbq/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
