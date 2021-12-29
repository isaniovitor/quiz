import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import ResultQuiz from '~/components/ResultQuiz';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { HOME_SCREEN } from '~/constants/routes';
import {
  getQuestionsCorrectQuestionsAction,
  getQuestionsInCorrectQuestionsAction,
  getQuestionsSuccessAction,
  getQuestionsTemplateAction,
} from '~/store/ducks/questions/actions';

import * as Sty from './styles';

const Result: React.FC = () => {
  const { template } = useSelector((state: AplicationState) => state.questions);

  const [numEasy, setNumEasy] = useState(0);
  const [numMedium, setNumMedium] = useState(0);
  const [numHard, setNumHard] = useState(0);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleHome() {
    dispatch(getQuestionsInCorrectQuestionsAction(0));
    dispatch(getQuestionsCorrectQuestionsAction(0));
    dispatch(getQuestionsSuccessAction([]));
    dispatch(getQuestionsTemplateAction([]));
    navigation.navigate(HOME_SCREEN);
  }

  // header navegation
  useEffect(() => {
    let easy = 0;
    let medium = 0;
    let hard = 0;

    template.map(quest => {
      // se acertou
      if (quest.gab) {
        switch (quest.question.difficulty) {
          case 'easy':
            easy += 1;
            break;
          case 'medium':
            medium += 1;
            break;
          case 'hard':
            hard += 1;
            break;
          default:
            return null;
        }
      }

      return null;
    });

    setNumEasy(easy);
    setNumMedium(medium);
    setNumHard(hard);
  }, [template]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Sty.ResultContainer>
          <Sty.ResultTitle>{numEasy + numMedium + numHard}0%</Sty.ResultTitle>
        </Sty.ResultContainer>
        <Sty.ResumeContainer>
          <ResultQuiz label="Fáceis" numberQuestions={numEasy} />
          <ResultQuiz label="Medianas" numberQuestions={numMedium} />
          <ResultQuiz label="Difíceis" numberQuestions={numHard} />
        </Sty.ResumeContainer>
        <Sty.ButtonContainer>
          <Button label="Menu" actionBtn={handleHome} />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Result;
