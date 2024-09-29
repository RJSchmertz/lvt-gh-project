import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile, { ProfileProps } from './Profile';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../../Theme/theme';

const mockUser: ProfileProps['user'] = {
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

describe('Profile', () => {
  it("should render the user's name and login", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Profile user={mockUser} />
      </ThemeProvider>,
    );
    expect(screen.getByText('The Octocat')).toBeInTheDocument();
    expect(screen.getByText('@octocat')).toBeInTheDocument();
  });

  it("should render the user's bio", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Profile user={mockUser} />
      </ThemeProvider>,
    );
    expect(
      screen.queryByText("Hi, I'm the Octocat! 👋"),
    ).not.toBeInTheDocument();
  });

  it("should render the user's stats", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Profile user={mockUser} />
      </ThemeProvider>,
    );
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('15132')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
  });

  it("should render the user's contact information", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Profile user={mockUser} />
      </ThemeProvider>,
    );
    expect(screen.getByText('San Francisco')).toBeInTheDocument();
    expect(screen.queryByText('@octocat')).toBeInTheDocument();
    expect(screen.getByText('https://github.blog')).toBeInTheDocument();
    expect(screen.getByText('@github')).toBeInTheDocument();
  });

  it('should display a "Not Available" message when a field is not provided', () => {
    const userWithMissingData = {
      ...mockUser,
      bio: '',
      twitter_username: '',
    };
    render(
      <ThemeProvider theme={darkTheme}>
        <Profile user={userWithMissingData} />
      </ThemeProvider>,
    );
    expect(screen.queryByText('Not Available')).not.toBeInTheDocument();
  });
});
