import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';

export type GithubUser =
  | Endpoints['GET /users/{username}']['response']['data']
  | undefined;

export async function fetchGitHubUser(username: string): Promise<GithubUser> {
  const octokit = new Octokit();

  try {
    const response = await octokit.request('GET /users/{username}', {
      username,
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
}
