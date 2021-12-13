import styled from 'styled-components/native';

import Icon from '~/components/Icon';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

// result
export const ResultContainer = styled.View`
  /* text-justify: distribute; */
  flex: 0.2;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.Colors.BACKGROUND_BUTTON_WHITE};
  border-radius: 50px;

  margin-bottom: 15px;
  height: 20px;
  width: 40%;
`;

export const ResultTitle = styled.Text`
  font-size: 57px;
  text-align: justify;

  color: ${({ theme }) => theme.Colors.BUTTON_WHITE_TEXT_INVERSE};
`;

// resume
export const ResumeContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;

  /* border: 1px solid red;
  border-top-left-radius: 50px; */

  width: 90%;
`;

export const Resume = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;

  margin: 10px 0;
  border-radius: 50px;

  background-color: ${({ theme }) => theme.Colors.BACKGROUND_BUTTON_WHITE};
  /* border: 1px solid red;
  border-top-left-radius: 50px; */

  width: 90%;
`;

// Button
export const ButtonContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;

  width: 90%;
`;