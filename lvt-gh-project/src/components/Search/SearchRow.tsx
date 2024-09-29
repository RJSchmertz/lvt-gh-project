import styled from '@emotion/styled';
import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Row = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  min-height: 3rem;
`;

const SearchIcon = styled.div`
  margin-right: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  &::placeholder {
    color: #fff;
    opacity: 0.6;
  }
`;

const SearchButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  cursor: pointer;
`;
export type SearchRowProps = {
  setSearchTerm: (term: string) => void;
};

function SearchRow({ setSearchTerm }: SearchRowProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearchClick = () => {
    setSearchTerm(inputValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <Row>
      <SearchIcon>
        <FaMagnifyingGlass />
      </SearchIcon>
      <SearchInput
        placeholder='Search GitHub username...'
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleSearchClick}>Search</SearchButton>
    </Row>
  );
}

export default SearchRow;
