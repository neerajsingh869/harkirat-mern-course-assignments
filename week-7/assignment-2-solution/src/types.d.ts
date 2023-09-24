export type AuthStateType = {
    token: string | null,
    username: string | null
  };

export type ServerAuthResponse = {
    message: string;
    token?: string;
}

export type ServerAuthMeResponse = {
  username: string;
  token: string
}

export type ServerTodoResponse = {
  title?: string;
  description?: string;
  done?: boolean;
  userId?: string;
  _id: string;
}
