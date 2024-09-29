import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchRow from './SearchRow';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../../Theme/theme';

describe('SearchRow', () => {
  it('should update the input value on change', () => {
    const setSearchTerm = jest.fn();
    render(
      <ThemeProvider theme={darkTheme}>
        <SearchRow setSearchTerm={setSearchTerm} />
      </ThemeProvider>,
    );

    const input = screen.getByPlaceholderText('Search GitHub username...');
    fireEvent.change(input, { target: { value: 'octocat' } });

    expect(input).toHaveValue('octocat');
  });

  it('should call the setSearchTerm function when the search button is clicked', () => {
    const setSearchTerm = jest.fn();
    render(
      <ThemeProvider theme={darkTheme}>
        <SearchRow setSearchTerm={setSearchTerm} />
      </ThemeProvider>,
    );

    const input = screen.getByPlaceholderText('Search GitHub username...');
    fireEvent.change(input, { target: { value: 'octocat' } });

    const button = screen.getByText('Search');
    fireEvent.click(button);

    expect(setSearchTerm).toHaveBeenCalledWith('octocat');
  });

  it('should call the setSearchTerm function when the Enter key is pressed', () => {
    const setSearchTerm = jest.fn();
    render(
      <ThemeProvider theme={darkTheme}>
        <SearchRow setSearchTerm={setSearchTerm} />
      </ThemeProvider>,
    );

    const input = screen.getByPlaceholderText('Search GitHub username...');
    fireEvent.change(input, { target: { value: 'octocat' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(setSearchTerm).toHaveBeenCalledWith('octocat');
  });
});
