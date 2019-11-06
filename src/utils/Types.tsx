export interface IUser  {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string
    location: ILocation[],
    roles: iRoles
};

export interface IRedux {
    meta: IMeta,
    users: IUser[]
};

export interface ILocation {

    streetAddress: string,
    suiteNumber: string,
    city: string,
    state: string,
};

export interface iRoles {
    admin: string,
    nonAdmin: string,
};

export interface IMeta {
    isFetching: boolean,
    errorMessage: string
};