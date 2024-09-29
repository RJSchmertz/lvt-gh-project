import React from 'react';
import styled from '@emotion/styled';
import { H1 } from '../../Styles/styles';

const AppHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AppName = styled.div`
  margin-bottom: 1rem;
`;

// const DarkModeToggle = styled.div`
//   margin-left: auto;
// `;

function AppHeader() {
  return (
    <>
      <AppHeaderRow>
        <AppName>
          <H1>devfinder</H1>
        </AppName>
        {/* <DarkModeToggle>DarkModeToggle</DarkModeToggle> */}
      </AppHeaderRow>
    </>
  );
}

export default AppHeader;
