import styled from 'styled-components/native';

import { DARK, LIGHT } from '~/constants/theme';

import Icon from '../Icon';

export const Conteiner = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 5px 0;
  padding: 0 10px;
  border-radius: 15px;

  background: ${({ theme }) =>
    theme === DARK ? theme.Colors.BACKGROUND : theme.Colors.BUTTON_COLOR};
`;

export const ButtonCategory = styled.TouchableOpacity`
  align-items: flex-start;
  justify-content: center;

  width: 90%;
  height: 45px;

  font-size: 20px;
  border-radius: 15px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.Colors.BUTTON_WHITE_TEXT};
`;

// icon
export const IconConteiner = styled.View``;

export const IconInput = styled(Icon).attrs(({ theme }) => ({
  name: 'arrow-right',
  size: 24,
  color: theme.Colors.BUTTON_WHITE_TEXT,
}))``;
