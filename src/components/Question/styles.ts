import styled from 'styled-components/native';

import Text from '~/components/Text';

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
