import styled from 'styled-components/native';

import Text from '~/components/Text';

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
