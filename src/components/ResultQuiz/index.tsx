import React from 'react';
import { Text } from 'react-native';

import * as Sty from './styles';

interface ResultProps {
  label: string;
  numberQuestions: number;
}

const ResultQuiz: React.FC<ResultProps> = ({ label, numberQuestions }) => {
  return (
    // <Text>{numberQuestions}</Text>
    <Sty.Result>
      <Sty.TextNumber>{numberQuestions}</Sty.TextNumber>
      <Sty.TextLabel>Respostas {label}</Sty.TextLabel>
    </Sty.Result>
  );
};

export default ResultQuiz;
