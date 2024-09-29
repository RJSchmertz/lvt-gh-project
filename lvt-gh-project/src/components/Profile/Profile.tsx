import styled from '@emotion/styled';
import React from 'react';
import { GithubUser } from '../../API/fetchGithubUser';
import { MdOutlineLocationOn } from 'react-icons/md';
import { RiTwitterLine } from 'react-icons/ri';
import { FaLink } from 'react-icons/fa6';
import { PiBuildingOffice } from 'react-icons/pi';
import { H2 } from '../../Styles/styles';

const ProfileContainer = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
`;

const ProfileImage = styled.img`
  width: 25%;
  height: 25%;
  border-radius: 15px;
  margin-right: 2rem;
  border-radius: 50%;
`;

const ProfileInfo = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const ProfileGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  background-color: ${props => props.theme.colors.background.primary};
  padding: 1rem;
  border-radius: 15px;
`;

const ProfileGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileGridItemTitle = styled.span`
  font-weight: bold;
`;

const ProfileGridItemValue = styled.span`
  margin: 1px;
`;

const ProfileContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
`;

const ProfileContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UnavailableField = styled.span`
  opacity: 0.7;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  &:visited {
    color: ${props => props.theme.colors.primary};
  }
`;

export type ProfileProps = {
  user: GithubUser & Exclude<GithubUser, undefined>;
};

function Profile({ user }: ProfileProps) {
  const NOT_AVAILABLE_TEXT = 'Not Available';

  return (
    <ProfileContainer>
      <ProfileImage src={user.avatar_url} alt='Profile' />
      <ProfileInfo>
        <div>
          <ProfileGridItem>
            <H2>{user?.name ? user.name : user.login}</H2>
            <StyledLink href={user.html_url}>@{user.login}</StyledLink>
          </ProfileGridItem>
        </div>
        <div>
          <ProfileGridItem>
            <span>
              {user.bio ? (
                user.bio
              ) : (
                <UnavailableField>This profile has no bio</UnavailableField>
              )}
            </span>
          </ProfileGridItem>
        </div>
        <ProfileGridRow>
          <ProfileGridItem>
            <ProfileGridItemTitle>Repos</ProfileGridItemTitle>
            <ProfileGridItemValue>
              <strong>{user.public_repos}</strong>
            </ProfileGridItemValue>
          </ProfileGridItem>
          <ProfileGridItem>
            <ProfileGridItemTitle>Followers</ProfileGridItemTitle>
            <ProfileGridItemValue>
              <strong>{user.followers}</strong>
            </ProfileGridItemValue>
          </ProfileGridItem>
          <ProfileGridItem>
            <ProfileGridItemTitle>Following</ProfileGridItemTitle>
            <ProfileGridItemValue>
              <strong>{user.following}</strong>
            </ProfileGridItemValue>
          </ProfileGridItem>
        </ProfileGridRow>
        <ProfileContactGrid>
          <ProfileContactItem>
            <ProfileGridItemValue>
              <MdOutlineLocationOn />
              {user.location ?? (
                <UnavailableField>{NOT_AVAILABLE_TEXT}</UnavailableField>
              )}
            </ProfileGridItemValue>
          </ProfileContactItem>
          <ProfileContactItem>
            <ProfileGridItemValue>
              <FaLink />
              {user.blog ?? (
                <UnavailableField>{NOT_AVAILABLE_TEXT}</UnavailableField>
              )}
            </ProfileGridItemValue>
          </ProfileContactItem>
          <ProfileContactItem>
            <ProfileGridItemValue>
              <RiTwitterLine />
              {user.twitter_username ?? (
                <UnavailableField>{NOT_AVAILABLE_TEXT}</UnavailableField>
              )}
            </ProfileGridItemValue>
          </ProfileContactItem>
          <ProfileContactItem>
            <ProfileGridItemValue>
              <PiBuildingOffice />
              {user.company ?? (
                <UnavailableField>{NOT_AVAILABLE_TEXT}</UnavailableField>
              )}
            </ProfileGridItemValue>
          </ProfileContactItem>
        </ProfileContactGrid>
      </ProfileInfo>
    </ProfileContainer>
  );
}

export default Profile;
