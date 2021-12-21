import styled from 'styled-components/native';

import Icon from '~/components/Icon';
import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

// answer
export const AnswerContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: flex-start;

  width: 90%;
`;

export const InputTitle = styled.Text`
  /* margin-top: 10px; */

  color: ${({ theme }) => theme.Colors.WHITE};
`;

// Button
export const ButtonContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;

  width: 90%;
`;

// icon
export const IconConteiner = styled.TouchableOpacity``;

export const IconInput = styled(Icon).attrs(({ theme }) => ({
  type: 'ionicons',
  name: 'person',
  size: 100,
  color: theme.Colors.WHITE,
}))``;
