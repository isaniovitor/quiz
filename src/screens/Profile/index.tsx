import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useFormik } from 'formik';
import { cloneDeep } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/Button';
import Picker from '~/components/DropDown';
import Input from '~/components/Input';
import { ModalGlobal } from '~/components/Modal';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { GenderProps } from '~/@types/entities/Gender';
import { GENDERS } from '~/constants/gender';
import { HOME_SCREEN, LOGIN_SCREEN } from '~/constants/routes';
import { changeProfileAction } from '~/store/ducks/user/actions';

import { validationSchema } from '../Login/validations';

import * as Sty from './styles';

interface DataProps {
  username: string;
  password: string;
  email: string;
  birthdate: string;
  gender: GenderProps;
  userimage: string;
}

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const { username, userimage, email, password, birthdate, gender } =
    useSelector((state: AplicationState) => state.user);

  function changeData(data: DataProps) {
    dispatch(
      changeProfileAction(
        data.username,
        data.password,
        data.userimage,
        data.email,
        data.birthdate,
        data.gender,
      ),
    );
    navigation.navigate(HOME_SCREEN);
  }

  function logout() {
    // dispatch(changeProfileAction(userName, userPassword, userImage, userEmail));
    navigation.navigate(LOGIN_SCREEN);
  }

  const { handleSubmit, dirty, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        username,
        password,
        email,
        userimage,
        birthdate,
        gender,
      },
      validationSchema,
      onSubmit: changeData,
      validateOnChange: false,
    });

  // function handlegender(item: any) {
  //   setFieldValue('gender', item);
  // }

  // image config
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFieldValue('userimage', result.uri);
    }
    setVisible(false);
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setFieldValue('userimage', result.uri);
    }

    setVisible(false);
  };

  // Modal
  function showModal() {
    setVisible(true);
  }

  // header navegation
  useEffect(() => {
    navigation.setOptions({
      enableNavigation: true,
      title: 'Perfil',
      save: handleSubmit,
    });
  }, [handleSubmit, navigation]);

  console.tron.log('gender', values.gender);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={false}
      style={{ flex: 1 }}
    >
      <Sty.Container>
        <Sty.ImageContainer>
          <Sty.IconConteiner onPress={() => showModal()}>
            <ModalGlobal
              visible={visible}
              setVisible={setVisible}
              actionButtonLeft={pickImage}
              actionButtonRight={selectImage}
            />
            {values.userimage ? (
              <Sty.Image source={{ uri: values.userimage }} />
            ) : (
              <Sty.IconInput />
            )}
            <Sty.ImageText>Mundar imagem</Sty.ImageText>
          </Sty.IconConteiner>
        </Sty.ImageContainer>

        <Sty.InputsContainer showsVerticalScrollIndicator={false}>
          <Input
            title="Nome"
            iconType="ionicons"
            placeholder="Digite seu username"
            value={values.username}
            error={errors.username}
            onChangeText={handleChange('username')}
            width={100}
          />
          <Input
            title="Email"
            placeholder="Digite sua email"
            value={values.email}
            onChangeText={handleChange('email')}
            width={100}
          />
          <Input
            title="Senha"
            placeholder="Digite sua senha"
            value={values.password}
            error={errors.password}
            onChangeText={handleChange('password')}
            width={100}
          />
          <Input
            title="Data Nascimento"
            placeholder="Digite sua senha"
            value={values.birthdate}
            onChangeText={handleChange('birthdate')}
            width={100}
          />
          <Picker
            title="Gênero"
            itemSelect={values.gender}
            setItem={item => {
              setFieldValue('gender', item);
            }}
            genders={GENDERS}
            disabled={false}
          />
        </Sty.InputsContainer>
        <Sty.ButtonContainer>
          <Button label="Sair" actionBtn={() => logout()} />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Profile;
