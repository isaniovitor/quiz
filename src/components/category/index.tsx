import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/entities/AplicationState';

import * as Sty from './styles';

interface ButtonProps {
  label: string;
  loading?: bollean;
  actionBtn: () => void;
}

const ButtonCategory: React.FC<ButtonProps> = ({
  label,
  loading,
  actionBtn,
}) => {
  const { loadingQuestions } = useSelector(
    (state: AplicationState) => state.questions,
  );

  return (
    <Sty.Conteiner>
      <Sty.ButtonCategory onPress={actionBtn}>
        <Sty.TextButton>{label}</Sty.TextButton>
      </Sty.ButtonCategory>
      <Sty.IconConteiner>
        <Sty.IconInput />
        {/* <Sty.Indicator /> */}
        {/* {loading ? (
          <ActivityIndicator size={24} color="white" />
        ) : (
          <Sty.IconInput />
        )} */}
      </Sty.IconConteiner>
    </Sty.Conteiner>
  );
};

export default ButtonCategory;
