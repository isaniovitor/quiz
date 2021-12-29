import React from 'react';

import * as Sty from './styles';

interface ButtonProps {
  label: string;
  actionBtn: () => void;
}

const ButtonCategory: React.FC<ButtonProps> = ({ label, actionBtn }) => {
  return (
    <Sty.Conteiner>
      <Sty.ButtonCategory onPress={actionBtn}>
        <Sty.TextButton>{label}</Sty.TextButton>
      </Sty.ButtonCategory>
      <Sty.IconConteiner>
        <Sty.IconInput />
      </Sty.IconConteiner>
    </Sty.Conteiner>
  );
};

export default ButtonCategory;
