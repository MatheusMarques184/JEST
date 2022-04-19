import { MessagingProtocol } from '../entities/interface/menssaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log(msg);
  }
}
