import styled from 'styled-components/native';

import Text from '../Text';

export const IndContainer = styled.View`
  /* flex: 1; */
  position: absolute;
  z-index: 100;
  width: 70%;

  border-radius: 6px;
  padding: 5px;
  background: ${({ theme }) => theme.Colors.BACKGROUND_WHITE};

  border: 1px solid ${({ theme }) => theme.Colors.WHITE};
`;

export const Title = styled(Text).attrs(({ theme }) => ({
  fontSize: 20,
}))`
  text-align: center;
  color: ${({ theme }) => theme.Colors.TEXT_BLUE_WHITE};
`;
