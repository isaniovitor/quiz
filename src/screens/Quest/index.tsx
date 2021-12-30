import { useNavigation, useRoute } from '@react-navigation/core';
import { decode } from 'html-entities';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Answer from '~/components/Answer';
import Button from '~/components/Button';
import { FeedBackModal } from '~/components/FeedBackModal';
import Indicator from '~/components/Indicator';
import Question from '~/components/Question';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { QuestionProps } from '~/@types/entities/Question';
import correct from '~/assets/correct.png';
import incorrect from '~/assets/incorrect.png';
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
  const route = useRoute();
  const dispatch = useDispatch();
  const { category } = route.params;
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

  function alert() {
    Alert.alert('Atenção:', `Selecione uma alternativa`, [{ text: 'OK' }]);
  }

  function showModal() {
    setModalVisible(true);
  }

  function getNextDifficulty() {
    setIdCurrentlLevel(idCurrentLevel + 1);
    dispatch(getQuestionsCorrectQuestionsAction(0));
    dispatch(getQuestionsAction(category, DIFFICULTY[idCurrentLevel + 1]));
  }

  function getPreviusDifficulty() {
    setIdCurrentlLevel(idCurrentLevel - 1);
    dispatch(getQuestionsInCorrectQuestionsAction(0));
    dispatch(getQuestionsAction(category, DIFFICULTY[idCurrentLevel - 1]));
  }

  function handleNextQuestion() {
    let numberCorrect = correctQuestions;
    let numberIncorrect = incorrectQuestions;
    const newTemplate = cloneDeep(template);
    const IsCorrect = currentQuestion?.correct_answer === usarAnswer;

    // add quest no gabarito
    newTemplate.push({ gab: IsCorrect, question: currentQuestion });
    dispatch(getQuestionsTemplateAction(newTemplate));

    // reset
    setModalVisible(false);
    setIdidCheckBoxSelected(-1);

    // verificando e guardando acertos
    if (IsCorrect) {
      numberCorrect = correctQuestions + 1;
      numberIncorrect = 0;
    } else {
      numberCorrect = 0;
      numberIncorrect = incorrectQuestions + 1;
    }

    dispatch(getQuestionsCorrectQuestionsAction(numberCorrect));
    dispatch(getQuestionsInCorrectQuestionsAction(numberIncorrect));

    // indo para screen result
    if (idCurrentQuestion >= 9) {
      return handleResute();
    }

    // verificando se acertou as 3 ultimas
    if (numberCorrect === 3 && idCurrentLevel !== DIFFICULTY.length - 1) {
      getNextDifficulty();
    }

    // verificando se errou as 3 ultimas
    if (idCurrentLevel !== 0 && numberIncorrect === 3) {
      getPreviusDifficulty();
    }

    // pegando proxima quest
    setIdCurrentQuestion(idCurrentQuestion + 1);
    return setCurrentQuestion(questionsList[idCurrentQuestion + 1]);
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

    newCurrentAnswers.push(decode(currentQuestion?.correct_answer));
    currentQuestion?.incorrect_answers.map(answer => {
      return newCurrentAnswers.push(decode(answer));
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
        {modalVisible && (
          <FeedBackModal
            image={
              currentQuestion?.correct_answer === usarAnswer
                ? correct
                : incorrect
            }
            visible={modalVisible}
            setVisible={setModalVisible}
            labelButton="Próxima"
            actionButton={handleNextQuestion}
          />
        )}

        <Question label={decode(currentQuestion?.question)} />
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
              idCheckBoxSelected === -1 ? alert() : showModal()
            }
          />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Quest;
