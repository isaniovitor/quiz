import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Answer from '~/components/Answer';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Question from '~/components/Question';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { QuestionProps } from '~/@types/entities/Question';
import { HOME_SCREEN, RESULT_SCREEN } from '~/constants/routes';
import { getQuestionsSuccessAction } from '~/store/ducks/questions/actions';

import * as Sty from './styles';

const Quest: React.FC = () => {
  const [idCurrentQuestion, setIdCurrentQuestion] = useState(0);
  // const [questions, setQuestions] = useState<any[] | []>([]);
  const navigation = useNavigation();

  const { questionsList } = useSelector(
    (state: AplicationState) => state.questions,
  );
  // const state = useSelector((state: AplicationState) => state);
  const [currentQuestion, setCurrentQuestion] = useState<any>(
    questionsList[idCurrentQuestion],
  );

  console.tron.log('na tela questão', questionsList);

  function handleResute() {
    navigation.navigate(RESULT_SCREEN);
  }

  function handleNextQuestion() {
    // console.tron.log('state', state);
    const idNextQuestion = idCurrentQuestion + 1;
    setIdCurrentQuestion(idNextQuestion);
    setCurrentQuestion(questionsList[idCurrentQuestion]);
  }

  // change question
  useEffect(() => {
    navigation.setOptions({
      enableNavigation: true,
      title: 'Questão 01',
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Question label={currentQuestion?.question} />
        <Sty.AnswerContainer>
          <Answer label={currentQuestion?.correct_answer} />
          <Answer label={currentQuestion?.incorrect_answers[0]} />
          <Answer label={currentQuestion?.incorrect_answers[1]} />
          <Answer label={currentQuestion?.incorrect_answers[2]} />
        </Sty.AnswerContainer>

        <Sty.ButtonContainer>
          <Button
            label="Próxima"
            actionBtn={() =>
              idCurrentQuestion < 10 ? handleNextQuestion() : handleResute()
            }
          />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Quest;
