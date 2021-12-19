import styled from 'styled-components/native';

import { DARK, LIGHT } from '~/constants/theme';

import Text from '../Text';

export const Result = styled.View`
  width: 70%;

/* background: black; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: row;

  /* border-color: ${({ theme }) => theme.Colors.BACKGROUND};
  border-bottom-width: 1px; */

  /* width: 100%;
  height: 45px;

  background: ${({ theme }) => theme.Colors.BACKGROUND_BUTTON_WHITE};

  font-size: 20px;
  margin: 0 auto; */ */
`;

export const TextNumber = styled(Text).attrs(({ theme }) => ({
  fontSize: 50,
}))`
  margin-right: 20px;
  color: ${({ theme }) => theme.Colors.TEXT_BLUE_WHITE};
`;

export const TextLabel = styled(Text).attrs(({ theme }) => ({
  fontSize: 20,
}))`
  color: ${({ theme }) => theme.Colors.TEXT_BLUE_WHITE};
`;
