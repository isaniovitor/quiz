import styled from 'styled-components/native';

import Text from '../Text';

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 45px;

  background: ${({ theme }) => theme.Colors.BACKGROUND_BUTTON_WHITE};
  /* background: white; */

  font-size: 20px;
  margin: 0 auto;
`;

export const TextButton = styled(Text).attrs(({ theme }) => ({
  fontSize: 20,
}))`
  color: ${({ theme }) => theme.Colors.BUTTONWHITE_TEXT};
`;
