import React from 'react';

import * as Sty from './styles';

interface QuestProps {
  label: string;
}

const Question: React.FC<QuestProps> = ({ label }) => {
  return (
    <Sty.QuestContainer>
      <Sty.QuestTitle>{label}</Sty.QuestTitle>
    </Sty.QuestContainer>
  );
};

export default Question;
