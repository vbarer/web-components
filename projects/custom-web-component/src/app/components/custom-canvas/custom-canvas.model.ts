export enum MessageType {
  INIT,
  UPDATE
}

export interface IMessage {
  type: MessageType;
  x: number;
  y: number;
}
