import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import logo from '~/assets/logo.png';
import { HOME_SCREEN } from '~/constants/routes';
import { getCategoryAction } from '~/store/ducks/category/actions';

import { validationSchema } from './validations';

import * as Sty from './styles';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { Colors } = useContext(ThemeContext);
  const { loadingCategory } = useSelector(
    (state: AplicationState) => state.category,
  );

  function handleLogin() {
    dispatch(getCategoryAction());
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
          {!loadingCategory ? (
            <Button
              disabled={!dirty}
              label="Entrar"
              actionBtn={() => handleSubmit()}
            />
          ) : (
            <ActivityIndicator size={70} color="gray" />
          )}
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
