export class ContactUs {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getFirstName(): string;
  setFirstName(a: string): void;
  getLastName(): string;
  setLastName(a: string): void;
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): ContactUs.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ContactUs;
}

export namespace ContactUs {
  export type AsObject = {
    Id: number;
    FirstName: string;
    LastName: string;
    EmailAddress: string;
    Message: string;
  }
}

export class EarlyAccess {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  toObject(): EarlyAccess.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => EarlyAccess;
}

export namespace EarlyAccess {
  export type AsObject = {
    Id: number;
    EmailAddress: string;
  }
}

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

export class FindContactUsItemByEmailReply {
  constructor ();
  getContactUs(): ContactUs;
  setContactUs(a: ContactUs): void;
  toObject(): FindContactUsItemByEmailReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FindContactUsItemByEmailReply;
}

export namespace FindContactUsItemByEmailReply {
  export type AsObject = {
    ContactUs: ContactUs;
  }
}

export class FindContactUsItemByEmailRequest {
  constructor ();
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  toObject(): FindContactUsItemByEmailRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FindContactUsItemByEmailRequest;
}

export namespace FindContactUsItemByEmailRequest {
  export type AsObject = {
    EmailAddress: string;
  }
}

export class FindEarlyAccessItemByEmailReply {
  constructor ();
  getEarlyAccess(): EarlyAccess;
  setEarlyAccess(a: EarlyAccess): void;
  toObject(): FindEarlyAccessItemByEmailReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FindEarlyAccessItemByEmailReply;
}

export namespace FindEarlyAccessItemByEmailReply {
  export type AsObject = {
    EarlyAccess: EarlyAccess;
  }
}

export class FindEarlyAccessItemByEmailRequest {
  constructor ();
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  toObject(): FindEarlyAccessItemByEmailRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FindEarlyAccessItemByEmailRequest;
}

export namespace FindEarlyAccessItemByEmailRequest {
  export type AsObject = {
    EmailAddress: string;
  }
}

export class SaveContactUsItemReply {
  constructor ();
  getContactUs(): ContactUs;
  setContactUs(a: ContactUs): void;
  toObject(): SaveContactUsItemReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveContactUsItemReply;
}

export namespace SaveContactUsItemReply {
  export type AsObject = {
    ContactUs: ContactUs;
  }
}

export class SaveContactUsItemRequest {
  constructor ();
  getCaptcha(): string;
  setCaptcha(a: string): void;
  getContactUs(): ContactUs;
  setContactUs(a: ContactUs): void;
  toObject(): SaveContactUsItemRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveContactUsItemRequest;
}

export namespace SaveContactUsItemRequest {
  export type AsObject = {
    Captcha: string;
    ContactUs: ContactUs;
  }
}

export class SaveEarlyAccessItemReply {
  constructor ();
  getEarlyAccess(): EarlyAccess;
  setEarlyAccess(a: EarlyAccess): void;
  toObject(): SaveEarlyAccessItemReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveEarlyAccessItemReply;
}

export namespace SaveEarlyAccessItemReply {
  export type AsObject = {
    EarlyAccess: EarlyAccess;
  }
}

export class SaveEarlyAccessItemRequest {
  constructor ();
  getCaptcha(): string;
  setCaptcha(a: string): void;
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  toObject(): SaveEarlyAccessItemRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveEarlyAccessItemRequest;
}

export namespace SaveEarlyAccessItemRequest {
  export type AsObject = {
    Captcha: string;
    EmailAddress: string;
  }
}

