import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import logo from '~/assets/logo.png';
import { HOME_SCREEN } from '~/constants/routes';

import { validationSchema } from './validations';

import * as Sty from './styles';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  function handleLogin() {
    navigation.navigate(HOME_SCREEN);
  }

  const { handleSubmit, dirty, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
    validateOnChange: false,
  });

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
          <Sty.Image source={logo} />
        </Sty.ImageContainer>
        <Sty.InputsContainer>
          <Input
            // title="oiolaaa"
            iconLeft="person"
            iconType="ionicons"
            placeholder="Digite seu username"
            value={values.username}
            error={errors.username}
            onChangeText={handleChange('username')}
            width={100}
          />
          <Input
            iconLeft="lock"
            placeholder="Digite sua senha"
            value={values.password}
            error={errors.password}
            onChangeText={handleChange('password')}
            secureTextEntry={!showPassword}
            actionIcon={() => setShowPassword(!showPassword)}
            iconRight={showPassword ? 'eye-off' : 'eye'}
            width={100}
          />
        </Sty.InputsContainer>
        <Sty.ButtonContainer>
          <Button
            disabled={!dirty}
            label="Entrar"
            actionBtn={() => handleSubmit()}
          />
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
