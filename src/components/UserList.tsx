import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import UserModel from "../store/models/UsersModel";
import UserItem from "./UsersItem";
import styled from "styled-components";

const RepoDeck = styled.div`
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;ƒ
`;

const UserList: React.FC = (): React.ReactElement => {
  const { items } = useSelector((state: AppState) => state.repositories);

  const repos = items.map((repo: UserModel) => (
    <UserItem key={repo.Id.toString()} {...repo} />
  ));

  return <RepoDeck>{repos}</RepoDeck>;
};

export default UserList;
