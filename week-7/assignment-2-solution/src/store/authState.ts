import { atom } from 'recoil';
import { AuthStateType } from '../types';

export const authState = atom<AuthStateType>({
  key: 'authState',
  default: { token: null as AuthStateType["token"], username: null as AuthStateType["username"]},
});