import UserModel from "../models/UsersModel";

export const USER_LOADING_ACTION_TYPE = "USERS_LOADING";
export const USER_SUCCESS_ACTION_TYPE = "USERS_SUCCESS";
export const USER_ERROR_ACTION_TYPE = "USERS_ERROR";
export const GET_REPOS = "USERS_REPOS";


export type USERS_LOADING_ACTION = {
  type: string;
  payload: string;
};

export type GET_REPOS = {
  type: string;
  payload: string;
};

export type USERS_SUCCESS_ACTION = {
  type: string;
  payload: {
    items: UserModel[];
    pageNumber: number;
    isLastPage: boolean;
  };
};

export class USERS_ERROR_ACTION {
  type: string;
  payload: Error;
}

export type RepositoryAction =
  | USERS_LOADING_ACTION
  | USERS_SUCCESS_ACTION
  | USERS_ERROR_ACTION;
