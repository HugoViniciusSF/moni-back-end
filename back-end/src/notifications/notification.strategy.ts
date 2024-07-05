export interface NotificationStrategy {
  getName(): string;
  send(to: string, subject: string, body: string): Promise<void>;
}