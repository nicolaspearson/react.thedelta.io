export class AuthorizeReply {
  constructor ();
  getIsValid(): boolean;
  setIsValid(a: boolean): void;
  getUser(): User;
  setUser(a: User): void;
  toObject(): AuthorizeReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AuthorizeReply;
}

export namespace AuthorizeReply {
  export type AsObject = {
    IsValid: boolean;
    User: User;
  }
}

export class AuthorizeRequest {
  constructor ();
  toObject(): AuthorizeRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AuthorizeRequest;
}

export namespace AuthorizeRequest {
  export type AsObject = {
  }
}

export class ChangeUserPasswordReply {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getUser(): User;
  setUser(a: User): void;
  toObject(): ChangeUserPasswordReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ChangeUserPasswordReply;
}

export namespace ChangeUserPasswordReply {
  export type AsObject = {
    Token: string;
    User: User;
  }
}

export class ChangeUserPasswordRequest {
  constructor ();
  getNewPassword(): string;
  setNewPassword(a: string): void;
  getUser(): User;
  setUser(a: User): void;
  toObject(): ChangeUserPasswordRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ChangeUserPasswordRequest;
}

export namespace ChangeUserPasswordRequest {
  export type AsObject = {
    NewPassword: string;
    User: User;
  }
}

export class DeleteUserReply {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): DeleteUserReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteUserReply;
}

export namespace DeleteUserReply {
  export type AsObject = {
    User: User;
  }
}

export class DeleteUserRequest {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getUser(): User;
  setUser(a: User): void;
  toObject(): DeleteUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    Id: number;
    User: User;
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

export class FindUserByIdReply {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): FindUserByIdReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FindUserByIdReply;
}

export namespace FindUserByIdReply {
  export type AsObject = {
    User: User;
  }
}

export class FindUserByIdRequest {
  constructor ();
  getId(): number;
  setId(a: number): void;
  toObject(): FindUserByIdRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => FindUserByIdRequest;
}

export namespace FindUserByIdRequest {
  export type AsObject = {
    Id: number;
  }
}

export class LoginReply {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getUser(): User;
  setUser(a: User): void;
  toObject(): LoginReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LoginReply;
}

export namespace LoginReply {
  export type AsObject = {
    Token: string;
    User: User;
  }
}

export class LoginRequest {
  constructor ();
  getUsername(): string;
  setUsername(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  toObject(): LoginRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    Username: string;
    Password: string;
    EmailAddress: string;
  }
}

export class SaveUserReply {
  constructor ();
  getToken(): string;
  setToken(a: string): void;
  getUser(): User;
  setUser(a: User): void;
  toObject(): SaveUserReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveUserReply;
}

export namespace SaveUserReply {
  export type AsObject = {
    Token: string;
    User: User;
  }
}

export class SaveUserRequest {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): SaveUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SaveUserRequest;
}

export namespace SaveUserRequest {
  export type AsObject = {
    User: User;
  }
}

export class SearchTerm {
  constructor ();
  getField(): string;
  setField(a: string): void;
  getValue(): string;
  setValue(a: string): void;
  getOperator(): string;
  setOperator(a: string): void;
  toObject(): SearchTerm.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SearchTerm;
}

export namespace SearchTerm {
  export type AsObject = {
    Field: string;
    Value: string;
    Operator: string;
  }
}

export class SearchUserReply {
  constructor ();
  getUserList(): User[];
  setUserList(a: User[]): void;
  toObject(): SearchUserReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SearchUserReply;
}

export namespace SearchUserReply {
  export type AsObject = {
    UserList: User[];
  }
}

export class SearchUserRequest {
  constructor ();
  getLimit(): number;
  setLimit(a: number): void;
  getTermsList(): SearchTerm[];
  setTermsList(a: SearchTerm[]): void;
  toObject(): SearchUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => SearchUserRequest;
}

export namespace SearchUserRequest {
  export type AsObject = {
    Limit: number;
    TermsList: SearchTerm[];
  }
}

export class UpdateUserReply {
  constructor ();
  getUser(): User;
  setUser(a: User): void;
  toObject(): UpdateUserReply.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateUserReply;
}

export namespace UpdateUserReply {
  export type AsObject = {
    User: User;
  }
}

export class UpdateUserRequest {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getUser(): User;
  setUser(a: User): void;
  toObject(): UpdateUserRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    Id: number;
    User: User;
  }
}

export class User {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getFirstName(): string;
  setFirstName(a: string): void;
  getLastName(): string;
  setLastName(a: string): void;
  getUsername(): string;
  setUsername(a: string): void;
  getPassword(): string;
  setPassword(a: string): void;
  getEmailAddress(): string;
  setEmailAddress(a: string): void;
  getEnabled(): boolean;
  setEnabled(a: boolean): void;
  getLastLoggedInAt(): string;
  setLastLoggedInAt(a: string): void;
  toObject(): User.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => User;
}

export namespace User {
  export type AsObject = {
    Id: number;
    FirstName: string;
    LastName: string;
    Username: string;
    Password: string;
    EmailAddress: string;
    Enabled: boolean;
    LastLoggedInAt: string;
  }
}

