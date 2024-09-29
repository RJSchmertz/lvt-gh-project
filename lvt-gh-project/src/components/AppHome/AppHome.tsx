import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import AppHeader from '../AppHeader/AppHeader';
import SearchRow from '../Search/SearchRow';
import Profile from '../Profile/Profile';
import { fetchGitHubUser, GithubUser } from '../../API/fetchGithubUser';

const Home = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'monospace';
  font-size: 15px;
  line-height: 25px;
  color: white;
`;

const MainApp = styled.div`
  width: 50%;
`;

const ErrorMessage = styled.div`
  background-color: #dc3545;
  color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 16px;
`;

function AppHome() {
  const [user, setUser] = useState<GithubUser>();
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('rjschmertz');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchGitHubUser(searchTerm)
      .then(result => {
        setUser(result);
        setError(null);
      })
      .catch(error => {
        console.error(error);
        setError('Error fetching GitHub user');
        setUser(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchTerm]);

  return (
    <Home>
      <MainApp>
        <AppHeader />
        <SearchRow setSearchTerm={setSearchTerm} />
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : user ? (
          <Profile user={user} />
        ) : (
          <div />
        )}
      </MainApp>
    </Home>
  );
}

export default AppHome;
