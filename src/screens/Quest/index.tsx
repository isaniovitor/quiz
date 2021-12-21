import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Answer from '~/components/Answer';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Question from '~/components/Question';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { QuestionProps } from '~/@types/entities/Question';
import { HOME_SCREEN, RESULT_SCREEN } from '~/constants/routes';

import * as Sty from './styles';

const Quest: React.FC = () => {
  const route = useRoute();
  const { category } = route.params;

  const [amount, setAmount] = useState(10);
  const [idCurrentQuestion, setIdCurrentQuestion] = useState(1);
  const [idCategory, setIdCategory] = useState(0);
  const [questions, setQuestions] = useState<any[] | []>([]);
  const [currentQuestion, setCurrentQuestion] = useState<any>();
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  function handleResute() {
    navigation.navigate(RESULT_SCREEN);
  }

  function handleNextQuestion() {
    // console.log(idCategory);
    const nextQuestion = idCurrentQuestion + 1;
    setIdCurrentQuestion(nextQuestion);
    setCurrentQuestion(questions[idCurrentQuestion]);
    // console.log(nextQuestion);
  }

  // const getNewQuestions = useCallback(async () => {
  //   const newQuestions = await getQuestions(
  //     amount,
  //     idCategory,
  //     DIFFICULTY.EASY,
  //   );
  //   setQuestions(newQuestions);
  //   setCurrentQuestion(newQuestions[0]);
  //   // console.log(currentQuestion?.answers[0]);
  // }, [amount, idCategory]);

  // change question
  useEffect(() => {
    navigation.setOptions({
      enableNavigation: true,
      title: 'Questão 01',
    });

    if (category) {
      // id categoria e pegando as questoes
      // console.log(idCategory);
      setIdCategory(category);
      // console.log(idCategory);
      // getNewQuestions();
      // console.log('req');
    }
  }, [category, idCategory, navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Question label={currentQuestion?.question} />
        <Sty.AnswerContainer>
          <Answer label={currentQuestion?.answers[0]} />
          <Answer label={currentQuestion?.answers[1]} />
          <Answer label={currentQuestion?.answers[2]} />
          <Answer label={currentQuestion?.answers[3]} />
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
