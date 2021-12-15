import styled from 'styled-components/native';

import Icon from '~/components/Icon';
import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

// Quest
export const QuestContainer = styled.View`
  /* text-justify: distribute; */
  flex: 0.2;
  margin-bottom: 15px;
  width: 90%;
`;

export const QuestTitle = styled(Text).attrs(({ theme }) => ({
  fontSize: 13,
}))`
  text-align: justify;

  color: ${({ theme }) => theme.Colors.WHITE};
`;

// answer
export const AnswerContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: flex-start;

  width: 90%;
`;

export const Answer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AnswerTitle = styled(Text).attrs(({ theme }) => ({
  fontSize: 14,
}))`
  /* font-size: 16px; */

  color: ${({ theme }) => theme.Colors.WHITE};
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
