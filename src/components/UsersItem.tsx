import * as React from "react";
import {Link} from 'react-router-dom'
import UserModel from "../store/models/UsersModel";
import styled from "styled-components";
import { Icon } from "antd";

const RepoCard = styled.div`
  width:45%
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 1px solid grey;
  justify-content: space-between;
  border-radius: 10px;
`;

const button = styled.div`
.btn {
  display: inline-block;
  background: #333333;
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  border-radius:50px;
}

`;

const ImgPart = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  text-align: center;
`;
const LinkPart = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  font-size: 20px;
`;

const StatisticPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StickySpan = styled.span`
  text-align: right;
`;

const UserItem: React.FC<UserModel> = ({
  login,
  html_url,
  organizations_url,
  avatar_url,
  repos_url,
  url,
  followers_url
}: UserModel): React.ReactElement => {
  return (
    <RepoCard>
      <ImgPart>
        <img src={avatar_url} width="75" height="75" />

        <span>
          <a href={html_url}>{login}</a>
        </span>
      </ImgPart>
      <LinkPart>
      
        <button>
          <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </button>
       
      </LinkPart>
      <StatisticPart>
        <StickySpan>
          
          <Icon type="star" theme="filled" />
        </StickySpan>
        <StickySpan>
         
          <Icon type="code" theme="filled" />
        </StickySpan>
      </StatisticPart>
    </RepoCard>
  );
};

export default UserItem;
