import { Dispatch } from "redux";
import axios from "axios";

import {
  USERS_LOADING_ACTION,
  USERS_ERROR_ACTION,
  USERS_SUCCESS_ACTION,
  USER_ERROR_ACTION_TYPE,
  USER_LOADING_ACTION_TYPE,
  USER_SUCCESS_ACTION_TYPE,
  GET_REPOS
} from "./actionTypes";

import UserModel from "../models/UsersModel";

const getGithubUsersApiEndPoint = (
  termString: string,
  pageSize: number,
  pageNumber: number
) =>
  `https://api.github.com/search/users?q=${termString}&per_page=${pageSize}&page=${pageNumber}`;

export const fetchUsers = (searchTerm: string,pageNumber: number = 1) => async (dispatch: Dispatch) => {
  const actionLoading: USERS_LOADING_ACTION = {
    type: USER_LOADING_ACTION_TYPE,
    payload: searchTerm
  };

  dispatch(actionLoading);

  try {
    const pageSize = 10;
    const apiUrl = getGithubUsersApiEndPoint(
      searchTerm,
      pageSize,
      pageNumber
    );

    const response = await axios.get(apiUrl);
   
    const items: UserModel[] = response.data.items.map(
      (user: any): UserModel => {
        return {
          Id: user.id,
          login: user.login,
          html_url: user.html_url,
          followers_url: user.followers_url,
          repos_url: user.repos_url,
          avatar_url: user.avatar_url,
          organizations_url: user.organizations_url,
          url: user.url
        };
      }
    );

    const isLastPage =
      (pageNumber - 1) * pageSize + response.data.items.length >=
      response.data.total_count;

    const actionSucces: USERS_SUCCESS_ACTION = {
      type: USER_SUCCESS_ACTION_TYPE,
      payload: {
        items,
        pageNumber,
        isLastPage
      }
    };
    dispatch(actionSucces);
  } catch (error) {
    const actionError: USERS_ERROR_ACTION = {
      type: USER_ERROR_ACTION_TYPE,
      payload: error
    };
    dispatch(actionError);
  }
};


export const getUserRepos = (userName: string) => async (dispatch: Dispatch) => {
  const res = await axios.get(
    `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc`
  );
  dispatch({
    type:GET_REPOS,
    payload:res.data,
  });
};
