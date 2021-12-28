import { useNavigation, useRoute } from '@react-navigation/core';
import { cloneDeep } from 'lodash';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Answer from '~/components/Answer';
import Button from '~/components/Button';
import Indicator from '~/components/Indicator';
import Input from '~/components/Input';
import Question from '~/components/Question';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { QuestionProps } from '~/@types/entities/Question';
import { DIFFICULTY } from '~/constants/difficulty';
import { HOME_SCREEN, RESULT_SCREEN } from '~/constants/routes';
import {
  getQuestionsAction,
  getQuestionsSuccessAction,
  getQuestionsTemplateAction,
} from '~/store/ducks/questions/actions';

import * as Sty from './styles';

const Quest: React.FC = () => {
  const braekpoints = [2, 5, 8];
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const [usarAnswer, setUsarAnswer] = useState<string | undefined>('');

  // 0 pois sempre começa no easy
  const [idCurrentLevel, setIdCurrentlLevel] = useState(0);
  const [idCurrentQuestion, setIdCurrentQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>();
  const { questionsList, template } = useSelector(
    (state: AplicationState) => state.questions,
  );
  const { loadingQuestions } = useSelector(
    (state: AplicationState) => state.questions,
  );

  // aux funcitons
  function isCorrect(newTemplate: any) {
    console.tron.log('tem', newTemplate);
    return newTemplate[0].gab && newTemplate[1].gab && newTemplate[2].gab;
  }

  function isSameLevel(newTemplate: any) {
    return (
      newTemplate[0].question.difficulty ===
        newTemplate[1].question.difficulty &&
      newTemplate[0].question.difficulty === newTemplate[2].question.difficulty
    );
  }

  function getNextDifficulty(newTemplate: any) {
    if (isSameLevel(newTemplate)) {
      const newLevel = idCurrentLevel + 1;
      setIdCurrentlLevel(newLevel);

      dispatch(getQuestionsAction(9, DIFFICULTY[newLevel]));
    }
  }

  function getPreviusDifficulty(newTemplate: any) {
    if (!isSameLevel(newTemplate)) {
      const newLevel = idCurrentLevel - 1;
      setIdCurrentlLevel(newLevel);

      dispatch(getQuestionsAction(9, DIFFICULTY[newLevel]));
    }
  }

  function handleResute() {
    navigation.navigate(RESULT_SCREEN);
  }

  async function handleNextQuestion() {
    const idNextQuestion = idCurrentQuestion + 1;
    setIdCurrentQuestion(idNextQuestion);

    // verificar se acertou
    const IsCorrect = currentQuestion?.correct_answer === usarAnswer;

    // add no gab
    console.tron.log('current', currentQuestion);

    const newTemplate = cloneDeep(template);
    newTemplate.push({ gab: IsCorrect, question: currentQuestion });
    await dispatch(getQuestionsTemplateAction(newTemplate));

    // verificando se acertou as 3 ultimas
    // ao menos 3 para fazer a vefiricação
    if (
      idCurrentQuestion >= 2 &&
      isCorrect(newTemplate) &&
      isSameLevel(newTemplate) &&
      idCurrentLevel !== DIFFICULTY.length - 1
    ) {
      return getNextDifficulty(newTemplate);
    }
    if (idCurrentLevel !== 0 && !isCorrect(newTemplate)) {
      return getPreviusDifficulty(newTemplate);
    }

    // pegando proxima quest
    // const idNextQuestion = idCurrentQuestion + 1;

    return setCurrentQuestion(questionsList[idCurrentQuestion]);
  }

  // change question
  useEffect(() => {
    navigation.setOptions({
      enableNavigation: true,
      title: `Questão ${idCurrentQuestion + 1}`,
    });

    setCurrentQuestion(questionsList[idCurrentQuestion]);
  }, [idCurrentQuestion, navigation, questionsList]);

  useEffect(() => {
    if (loadingQuestions) setVisible(true);
    else setVisible(false);
  }, [loadingQuestions]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        {visible && <Indicator label="Montando questões, aguarde!" />}

        <Question label={currentQuestion?.question} />
        <Sty.AnswerContainer>
          <Answer
            label={currentQuestion?.correct_answer}
            actionBtn={() => setUsarAnswer(currentQuestion?.correct_answer)}
          />
          <Answer
            label={currentQuestion?.incorrect_answers[0]}
            actionBtn={() =>
              setUsarAnswer(currentQuestion?.incorrect_answers[0])
            }
          />
          <Answer
            label={currentQuestion?.incorrect_answers[1]}
            actionBtn={() =>
              setUsarAnswer(currentQuestion?.incorrect_answers[1])
            }
          />
          <Answer
            label={currentQuestion?.incorrect_answers[2]}
            actionBtn={() =>
              setUsarAnswer(currentQuestion?.incorrect_answers[2])
            }
          />
        </Sty.AnswerContainer>

        <Sty.ButtonContainer>
          <Button
            label="Próxima"
            actionBtn={() =>
              idCurrentQuestion < 9 ? handleNextQuestion() : handleResute()
            }
          />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Quest;
