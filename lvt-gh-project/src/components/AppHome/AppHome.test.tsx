import React from 'react';
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from '@testing-library/react';
import AppHome from './AppHome';
import { fetchGitHubUser, GithubUser } from '../../API/fetchGithubUser';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../../Theme/theme';

jest.mock('../../API/fetchGithubUser', () => ({
  fetchGitHubUser: jest.fn(),
}));

const mockUser: GithubUser = {
  login: 'octocat',
  id: 583231,
  node_id: 'MDQ6VXNlcjU4MzIzMQ==',
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  repos_url: 'https://api.github.com/users/octocat/repos',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  type: 'User',
  site_admin: false,
  name: 'The Octocat',
  company: '@github',
  blog: 'https://github.blog',
  location: 'San Francisco',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 8,
  public_gists: 8,
  followers: 15132,
  following: 9,
  created_at: '2011-01-25T18:44:36Z',
  updated_at: '2024-09-22T11:25:27Z',
};

describe('AppHome', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch the user data and render the Profile component', async () => {
    (fetchGitHubUser as jest.Mock).mockResolvedValueOnce(mockUser);
    render(
      <ThemeProvider theme={darkTheme}>
        <AppHome />
      </ThemeProvider>,
    );

    await screen.findByText('The Octocat');
  });

  it('should display an error message if there is an error fetching the user data', async () => {
    (fetchGitHubUser as jest.Mock).mockRejectedValueOnce(
      new Error('Network error'),
    );
    render(
      <ThemeProvider theme={darkTheme}>
        <AppHome />
      </ThemeProvider>,
    );

    await waitFor(() =>
      expect(fetchGitHubUser).toHaveBeenCalledWith('rjschmertz'),
    );
    await screen.findByText('Error fetching GitHub user');
  });

  it('should update the search term and fetch the new user data', async () => {
    (fetchGitHubUser as jest.Mock).mockResolvedValue(mockUser);
    render(
      <ThemeProvider theme={darkTheme}>
        <AppHome />
      </ThemeProvider>,
    );

    const input = screen.getByPlaceholderText('Search GitHub username...');
    await act(async () => {
      fireEvent.change(input, { target: { value: 'newuser' } });
      fireEvent.click(screen.getByText('Search'));
    });

    await waitFor(() =>
      expect(fetchGitHubUser).toHaveBeenCalledWith('newuser'),
    );
    expect(screen.getByText('The Octocat')).toBeInTheDocument();
  });
});
