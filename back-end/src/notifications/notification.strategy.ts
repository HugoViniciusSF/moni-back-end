export interface NotificationStrategy {
    send(to: string, subject: string, body: string): Promise<void>;
  }