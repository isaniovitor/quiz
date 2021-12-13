import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { HOME_SCREEN, RESULT_SCREEN } from '~/constants/routes';

import * as Sty from './styles';

const Quest: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUsePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  function handleResute() {
    navigation.navigate(RESULT_SCREEN);
  }

  // header navegation
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
        <Sty.QuestContainer>
          <Sty.QuestTitle>
            LoreQuestT QuestT QuestTQuest TQuestT TQuestTQuestTQuestT QuestT
            QuestT QuestTQuestTQuestTQuestT QuestTQuestTQuestTQuestT
            QuestTQuestTQuestTQuest
          </Sty.QuestTitle>
        </Sty.QuestContainer>
        <Sty.AnswerContainer>
          <Sty.Answer>
            <Checkbox
              status="unchecked"
              uncheckedColor="white"
              onPress={() => console.log('respondeu')}
            />
            <Sty.AnswerTitle>Ques</Sty.AnswerTitle>
          </Sty.Answer>
          <Sty.Answer>
            <Checkbox
              status="unchecked"
              uncheckedColor="white"
              onPress={() => console.log('respondeu')}
            />
            <Sty.AnswerTitle>Ques</Sty.AnswerTitle>
          </Sty.Answer>
          <Sty.Answer>
            <Checkbox
              status="unchecked"
              uncheckedColor="white"
              onPress={() => console.log('respondeu')}
            />
            <Sty.AnswerTitle>Ques</Sty.AnswerTitle>
          </Sty.Answer>
          <Sty.Answer>
            <Checkbox
              status="unchecked"
              uncheckedColor="white"
              onPress={() => console.log('respondeu')}
            />
            <Sty.AnswerTitle>Ques</Sty.AnswerTitle>
          </Sty.Answer>
          <Sty.Answer>
            <Checkbox
              status="unchecked"
              uncheckedColor="white"
              onPress={() => console.log('respondeu')}
            />
            <Sty.AnswerTitle>Ques</Sty.AnswerTitle>
          </Sty.Answer>
        </Sty.AnswerContainer>

        <Sty.ButtonContainer>
          <Button label="Próxima" actionBtn={handleResute} />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Quest;
