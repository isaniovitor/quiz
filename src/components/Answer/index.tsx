import React from 'react';
import { Checkbox } from 'react-native-paper';

import * as Sty from './styles';

interface AnswerProps {
  label: string;
  // disabled?: boolean;
  // actionBtn: () => void;
}

const Answer: React.FC<AnswerProps> = ({ label }) => {
  return (
    <Sty.Answer>
      <Checkbox
        status="unchecked"
        uncheckedColor="white"
        onPress={() => console.log('respondeu')}
      />
      <Sty.AnswerTitle>{label}</Sty.AnswerTitle>
    </Sty.Answer>
  );
};

export default Answer;
