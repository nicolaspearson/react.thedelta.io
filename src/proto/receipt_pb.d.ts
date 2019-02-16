export class EchoReply {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): EchoReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => EchoReply;
}

export namespace EchoReply {
  export type AsObject = {
    Message: string;
  }
}

export class EchoRequest {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): EchoRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    Message: string;
  }
}

export class Receipt {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getUuid(): string;
  setUuid(a: string): void;
  getFileUrl(): string;
  setFileUrl(a: string): void;
  getDate(): string;
  setDate(a: string): void;
  getItemsList(): ReceiptItem[];
  setItemsList(a: ReceiptItem[]): void;
  getTotalsList(): ReceiptItem[];
  setTotalsList(a: ReceiptItem[]): void;
  getVendor(): string;
  setVendor(a: string): void;
  getUserId(): number;
  setUserId(a: number): void;
  toObject(): Receipt.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Receipt;
}

export namespace Receipt {
  export type AsObject = {
    Id: number;
    Uuid: string;
    FileUrl: string;
    Date: string;
    ItemsList: ReceiptItem[];
    TotalsList: ReceiptItem[];
    Vendor: string;
    UserId: number;
  }
}

export class ReceiptItem {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getReceiptId(): number;
  setReceiptId(a: number): void;
  getDescription(): string;
  setDescription(a: string): void;
  getQuantity(): number;
  setQuantity(a: number): void;
  getPrice(): number;
  setPrice(a: number): void;
  toObject(): ReceiptItem.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ReceiptItem;
}

export namespace ReceiptItem {
  export type AsObject = {
    Id: number;
    ReceiptId: number;
    Description: string;
    Quantity: number;
    Price: number;
  }
}

export class SaveReceiptReply {
  constructor ();
  getReceipt(): Receipt;
  setReceipt(a: Receipt): void;
  toObject(): SaveReceiptReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveReceiptReply;
}

export namespace SaveReceiptReply {
  export type AsObject = {
    Receipt: Receipt;
  }
}

export class SaveReceiptRequest {
  constructor ();
  getReceipt(): Receipt;
  setReceipt(a: Receipt): void;
  toObject(): SaveReceiptRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveReceiptRequest;
}

export namespace SaveReceiptRequest {
  export type AsObject = {
    Receipt: Receipt;
  }
}

