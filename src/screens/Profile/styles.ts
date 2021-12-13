import styled from 'styled-components/native';

import Icon from '~/components/Icon';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

// Image
export const ImageContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 15px;
  width: 90%;
`;

export const ImageText = styled.Text`
  /* margin-top: 10px; */
  text-align: center;
  font-size: 12px;
  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 65px;
`;

// Inputs
export const InputsContainer = styled.View`
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
