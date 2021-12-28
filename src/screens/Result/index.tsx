import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';
import ResultQuiz from '~/components/ResultQuiz';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { HOME_SCREEN, RESULT_SCREEN } from '~/constants/routes';
import {
  getQuestionsSuccessAction,
  getQuestionsTemplateAction,
} from '~/store/ducks/questions/actions';

import * as Sty from './styles';

const Result: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUsePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { Colors } = useContext(ThemeContext);

  function handleHome() {
    dispatch(getQuestionsSuccessAction([]));
    dispatch(getQuestionsTemplateAction([]));
    navigation.navigate(HOME_SCREEN);
  }

  // header navegation
  // useEffect(() => {
  //   navigation.setOptions({
  //     enableNavigation: true,
  //     title: 'Resultado',
  //   });
  // }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Sty.ResultContainer>
          <Sty.ResultTitle>90%</Sty.ResultTitle>
        </Sty.ResultContainer>
        <Sty.ResumeContainer>
          <ResultQuiz label="Fáceis" numberQuestions={2} />
          <ResultQuiz label="Medianas" numberQuestions={1} />
          <ResultQuiz label="Difíceis" numberQuestions={3} />
          {/* <Sty.Resume>
            <Text>7 fáceis</Text>
          </Sty.Resume>
          <Sty.Resume>
            <Text>7 médias</Text>
          </Sty.Resume>
          <Sty.Resume>
            <Text>7 difíceis</Text>
          </Sty.Resume> */}
        </Sty.ResumeContainer>
        <Sty.ButtonContainer>
          <Button label="Menu" actionBtn={handleHome} />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Result;
