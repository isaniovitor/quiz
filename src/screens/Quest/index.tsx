import { useNavigation } from '@react-navigation/core';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Answer from '~/components/Answer';
import Button from '~/components/Button';
import Indicator from '~/components/Indicator';
import Question from '~/components/Question';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { QuestionProps } from '~/@types/entities/Question';
import { DIFFICULTY } from '~/constants/difficulty';
import { RESULT_SCREEN } from '~/constants/routes';
import {
  getQuestionsAction,
  getQuestionsCorrectQuestionsAction,
  getQuestionsInCorrectQuestionsAction,
  getQuestionsTemplateAction,
} from '~/store/ducks/questions/actions';

import { fisherYatesShuffle } from './utils';

import * as Sty from './styles';

// PEGAR CATEGORIA DE HOME
const Quest: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [usarAnswer, setUsarAnswer] = useState<string | undefined>('');

  const [idCheckBoxSelected, setIdidCheckBoxSelected] = useState(-1);
  const [idCurrentLevel, setIdCurrentlLevel] = useState(0);
  const [idCurrentQuestion, setIdCurrentQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>();
  const [currentAnswers, setIdCurrentAnswers] = useState<any[] | []>([]);
  const { questionsList, template, correctQuestions, incorrectQuestions } =
    useSelector((state: AplicationState) => state.questions);
  const { loadingQuestions } = useSelector(
    (state: AplicationState) => state.questions,
  );

  function handleResute() {
    navigation.navigate(RESULT_SCREEN);
  }

  function showModal() {
    setModalVisible(true);
  }

  function getNextDifficulty() {
    setIdCurrentlLevel(idCurrentLevel + 1);
    dispatch(getQuestionsCorrectQuestionsAction(0));
    dispatch(getQuestionsAction(9, DIFFICULTY[idCurrentLevel + 1]));
  }

  function getPreviusDifficulty() {
    setIdCurrentlLevel(idCurrentLevel - 1);
    dispatch(getQuestionsInCorrectQuestionsAction(0));
    dispatch(getQuestionsAction(9, DIFFICULTY[idCurrentLevel - 1]));
  }

  function handleNextQuestion() {
    const newTemplate = cloneDeep(template);
    const IsCorrect = currentQuestion?.correct_answer === usarAnswer;

    newTemplate.push({ gab: IsCorrect, question: currentQuestion });
    dispatch(getQuestionsTemplateAction(newTemplate));

    // verificando e guardando acertos
    // FAZER UM NOVO ACITON?
    if (IsCorrect) {
      dispatch(getQuestionsInCorrectQuestionsAction(0));
      dispatch(getQuestionsCorrectQuestionsAction(correctQuestions + 1));
    } else {
      dispatch(getQuestionsCorrectQuestionsAction(0));
      dispatch(getQuestionsInCorrectQuestionsAction(incorrectQuestions + 1));
    }

    // verificando se acertou as 3 ultimas
    if (correctQuestions === 2 && idCurrentLevel !== DIFFICULTY.length - 1) {
      return getNextDifficulty();
    }

    // verificando se errou as 3 ultimas
    if (idCurrentLevel !== 0 && incorrectQuestions === 2) {
      return getPreviusDifficulty();
    }

    // pegando proxima quest
    setModalVisible(false);
    setIdCurrentQuestion(idCurrentQuestion + 1);
    return setCurrentQuestion(questionsList[idCurrentQuestion]);
  }

  // nagegation
  useEffect(() => {
    navigation.setOptions({
      enableNavigation: true,
      title: `Questão ${idCurrentQuestion + 1}`,
    });

    setCurrentQuestion(questionsList[idCurrentQuestion]);
  }, [idCurrentQuestion, navigation, questionsList]);

  // load
  useEffect(() => {
    if (loadingQuestions) setVisible(true);
    else setVisible(false);
  }, [loadingQuestions]);

  // getting random answers
  useEffect(() => {
    const newCurrentAnswers = [];

    newCurrentAnswers.push(currentQuestion?.correct_answer);
    currentQuestion?.incorrect_answers.map(answer => {
      return newCurrentAnswers.push(answer);
    });

    fisherYatesShuffle(newCurrentAnswers);
    setIdCurrentAnswers(newCurrentAnswers);
  }, [
    currentQuestion?.correct_answer,
    currentQuestion?.incorrect_answers,
    loadingQuestions,
  ]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        {visible && <Indicator label="Aguarde!" />}
        {/* {modalVisible && (

          // <ModalGlobal
          //   answer={currentQuestion?.correct_answer === usarAnswer}
          //   visible={modalVisible}
          //   setVisible={setModalVisible}
          //   labelButtonLeft="Próxima"
          //   actionButtonLeft={handleNextQuestion}
          // />
        )} */}

        <Question label={currentQuestion?.question} />
        <Sty.AnswerContainer>
          <Answer
            idkey={0}
            keySelect={idCheckBoxSelected}
            label={currentAnswers[0]}
            actionBtn={() => {
              setUsarAnswer(currentAnswers[0]);
              setIdidCheckBoxSelected(0);
            }}
          />
          <Answer
            idkey={1}
            keySelect={idCheckBoxSelected}
            label={currentAnswers[1]}
            actionBtn={() => {
              setUsarAnswer(currentAnswers[1]);
              setIdidCheckBoxSelected(1);
            }}
          />
          <Answer
            idkey={2}
            keySelect={idCheckBoxSelected}
            label={currentAnswers[2]}
            actionBtn={() => {
              setUsarAnswer(currentAnswers[2]);
              setIdidCheckBoxSelected(2);
            }}
          />
          <Answer
            idkey={3}
            keySelect={idCheckBoxSelected}
            label={currentAnswers[3]}
            actionBtn={() => {
              setUsarAnswer(currentAnswers[3]);
              setIdidCheckBoxSelected(3);
            }}
          />
        </Sty.AnswerContainer>

        <Sty.ButtonContainer>
          <Button
            label={idCurrentQuestion < 9 ? 'Verificar' : 'Finalizar'}
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
