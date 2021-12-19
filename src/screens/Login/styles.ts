import styled from 'styled-components/native';

import Text from '~/components/Text';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

// Image
export const ImageContainer = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;

  width: 90%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

// Inputs
export const InputsContainer = styled.View`
  flex: 0.25;
  justify-content: center;
  align-items: center;

  width: 90%;
`;

// Button
export const ButtonContainer = styled.View`
  flex: 0.125;
  justify-content: center;
  align-items: center;

  width: 90%;
  padding-top: 15px;
`;

// CreateAccount
export const CreateAccountContainer = styled.View`
  flex: 0.125;
  justify-content: center;
  align-items: center;

  width: 90%;
`;

export const CreateAccountText = styled(Text).attrs(({ theme }) => ({
  fontSize: 14,
}))`
  padding-bottom: 5px;

  color: ${({ theme }) => theme.Colors.WHITE};
`;

export const CreateAccountButton = styled(Text).attrs(({ theme }) => ({
  fontSize: 14,
}))`
  font-weight: 700;

  color: ${({ theme }) => theme.Colors.WHITE};
`;
