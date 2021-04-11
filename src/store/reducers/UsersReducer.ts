import { USER_ERROR_ACTION_TYPE, USER_LOADING_ACTION_TYPE, USER_SUCCESS_ACTION_TYPE } from "../actions/actionTypes";
import UserModel from "../models/UsersModel";


interface IUserReducerState {
  items: UserModel[];
  isLastPage: boolean;
  pageNumber: number;
  isLoading: boolean;
  hasError: boolean;
  searchTerm: string;
  error: Error;
}

const defaultReducerState: IUserReducerState = {
  items: [],
  isLastPage: false,
  pageNumber: 0,
  isLoading: false,
  hasError: false,
  searchTerm: "",
  error: null
};

export const UsersReducer = (
  state: IUserReducerState = defaultReducerState,
  action: any
): IUserReducerState => {
  switch (action.type) {
    case USER_LOADING_ACTION_TYPE:
      return {
        ...state,
        items: [],
        isLoading: true,
        hasError: false,
        searchTerm: action.payload,
        error: null
      };

    case USER_SUCCESS_ACTION_TYPE:
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    case USER_ERROR_ACTION_TYPE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload
      };
    default:
      return state;
  }
};
