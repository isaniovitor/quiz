import styled from 'styled-components/native';

import Icon from '~/components/Icon';
import Text from '~/components/Text';

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

export const ImageText = styled(Text).attrs(({ theme }) => ({
  fontSize: 12,
}))`
  /* margin-top: 10px; */
  text-align: center;
  color: ${({ theme }) => theme.Colors.BACKGROUND_BUTTON_WHITE};
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 65px;
`;

// Inputs
export const InputsContainer = styled.ScrollView`
  flex: 0.5;
  /* justify-content: center;
  align-items: flex-start; */

  width: 90%;
`;

export const InputTitle = styled(Text).attrs(({ theme }) => ({
  fontSize: 12,
}))`
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
export const IconConteiner = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IconInput = styled(Icon).attrs(({ theme }) => ({
  type: 'ionicons',
  name: 'person',
  size: 100,
  color: theme.Colors.WHITE,
}))``;
