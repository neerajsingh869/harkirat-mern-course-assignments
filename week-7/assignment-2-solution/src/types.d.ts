export type AuthStateType = {
    token: string | null | undefined,
    username: string | null | undefined
  };

export type ServerAuthResponse = {
    message: string;
    token: string | undefined;
}

export type ServerAuthMeResponse = {
  username: string | undefined;
  token: string | undefined
}

export type ServerTodoResponse = {
  title: string;
  description: string;
  done: boolean;
  userId: string;
  _id: string;
}
