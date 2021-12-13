import React from 'react';

import * as Sty from './styles';

interface ButtonProps {
  label: string;
  actionBtn: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, actionBtn }) => {
  return (
    <Sty.Button onPress={actionBtn}>
      <Sty.TextButton>{label}</Sty.TextButton>
    </Sty.Button>
  );
};

export default Button;
