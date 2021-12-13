import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Colors.BACKGROUND_WHITE};
`;

export const ListContainer = styled.View`
  padding: 0 10px;
`;
