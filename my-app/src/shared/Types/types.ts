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