import React from 'react';
import { Checkbox } from 'react-native-paper';

import * as Sty from './styles';

interface QuestProps {
  label: string;
  // disabled?: boolean;
  // actionBtn: () => void;
}

const Question: React.FC<QuestProps> = ({ label }) => {
  return (
    <Sty.QuestContainer>
      <Sty.QuestTitle>{label}</Sty.QuestTitle>
    </Sty.QuestContainer>
  );
};

export default Question;
