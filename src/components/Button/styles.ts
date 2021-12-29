import styled from 'styled-components/native';

import Text from '../Text';

interface BottunProps {
  isDisabled: boolean;
}

export const Button = styled.TouchableOpacity<BottunProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 45px;

  background: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.Colors.MEDIUM_GRAY
      : theme.Colors.BACKGROUND_BUTTON_WHITE};

  font-size: 20px;
  margin: 0 auto;
`;

export const TextButton = styled(Text).attrs(({ theme }) => ({
  fontSize: 20,
}))`
  color: ${({ theme }) => theme.Colors.BUTTONWHITE_TEXT};
`;
