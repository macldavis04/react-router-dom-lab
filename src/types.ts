export type BoxSize = "Small" | "Medium" | "Large";

export interface Mailbox {
  _id: number;
  boxOwner: string;
  boxSize: BoxSize;
}

export interface NewMailbox {
  boxOwner: string;
  boxSize: BoxSize;
}