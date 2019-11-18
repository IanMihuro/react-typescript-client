export interface IUser {
  _id?: null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  location: ILocation[];
  role: boolean;
}

export interface IRedux {
  meta: IMeta;
  users: IUser[];
}

export interface ILocation {
  streetAddress: string;
  suiteNumber: string;
  city: string;
  state: string;
}

export interface IMeta {
  isFetching: boolean;
  errorMessage: string;
  successMessage: string;
}
