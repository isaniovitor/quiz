import React from 'react';

import * as Sty from './styles';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  actionBtn: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, actionBtn, disabled }) => {
  return (
    <Sty.Button disabled={disabled} onPress={actionBtn}>
      <Sty.TextButton>{label}</Sty.TextButton>
    </Sty.Button>
  );
};

export default Button;
