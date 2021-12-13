import styled from 'styled-components/native';

import { DARK, LIGHT } from '~/constants/theme';

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 45px;

  background: ${({ theme }) => theme.Colors.BACKGROUND_BUTTON_WHITE};

  font-size: 20px;
  margin: 0 auto;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.Colors.BUTTONWHITE_TEXT};
`;
