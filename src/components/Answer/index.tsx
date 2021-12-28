import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';

import * as Sty from './styles';

interface AnswerProps {
  label: string;
  // disabled?: boolean;
  actionBtn: () => void;
}

const Answer: React.FC<AnswerProps> = ({ label, actionBtn }) => {
  const [select, setSelect] = useState(false);

  function handleAnswer() {
    setSelect(!select);
    actionBtn();
  }

  return (
    <Sty.Answer>
      <Checkbox
        status={select ? 'checked' : 'unchecked'}
        uncheckedColor="white"
        onPress={() => handleAnswer()}
      />
      <Sty.AnswerTitle>{label}</Sty.AnswerTitle>
    </Sty.Answer>
  );
};

export default Answer;
