export interface IUpdateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  avatar?: File;
}
export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  avatar: FileList;
}
export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
}
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  username: string;
  avatar?: string;
}
