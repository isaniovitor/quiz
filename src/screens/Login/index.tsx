import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { HOME_SCREEN } from '~/constants/routes';

import * as Sty from './styles';

const Login: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUsePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  // header navegation
  useEffect(() => {
    navigation.setOptions({
      enableNavigation: false,
    });
  }, [navigation, Colors]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Sty.ImageContainer>
          <Text>Image</Text>
        </Sty.ImageContainer>
        <Sty.InputsContainer>
          <Input
            iconLeft="person"
            iconType="ionicons"
            placeholder="Digite seu username"
            value={userName}
            onChangeText={setUserName}
            width={100}
          />
          <Input
            iconLeft="lock"
            placeholder="Digite sua senha"
            value={userPassword}
            onChangeText={setUsePassword}
            secureTextEntry={!showPassword}
            actionIcon={() => setShowPassword(!showPassword)}
            iconRight={showPassword ? 'eye-off' : 'eye'}
            width={100}
          />
        </Sty.InputsContainer>
        <Sty.ButtonContainer>
          <Button label="Entrar" actionBtn={handleLogin} />
        </Sty.ButtonContainer>
        <Sty.CreateAccountContainer>
          <Sty.CreateAccountText>ou</Sty.CreateAccountText>
          <Sty.CreateAccountButton>Create acoount</Sty.CreateAccountButton>
        </Sty.CreateAccountContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Login;
