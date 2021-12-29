import React, { useContext } from 'react';
import { Checkbox } from 'react-native-paper';
import { ThemeContext } from 'styled-components/native';

import * as Sty from './styles';

interface AnswerProps {
  label: string;
  idkey: number;
  keySelect: number;
  actionBtn: () => void;
}

const Answer: React.FC<AnswerProps> = ({
  label,
  actionBtn,
  idkey,
  keySelect,
}) => {
  const { Colors } = useContext(ThemeContext);

  function handleAnswer() {
    actionBtn();
  }

  return (
    <Sty.Answer>
      <Checkbox
        status={keySelect === idkey ? 'checked' : 'unchecked'}
        uncheckedColor={Colors.BACKGROUND_BUTTON_WHITE}
        onPress={() => handleAnswer()}
      />
      <Sty.AnswerTitle>{label}</Sty.AnswerTitle>
    </Sty.Answer>
  );
};

export default Answer;
