import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';
import { ModalGlobal } from '~/components/Modal';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { HOME_SCREEN } from '~/constants/routes';
import { changeProfileAction } from '~/store/ducks/user/actions';

import * as Sty from './styles';

const Profile: React.FC = () => {
  const { Colors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const { username, userimage, email, password } = useSelector(
    (state: AplicationState) => state.user,
  );

  const [userName, setUserName] = useState(username);
  const [userPassword, setUsePassword] = useState(password);
  const [userEmail, setUserEmail] = useState(email);
  const [userImage, setUserImage] = useState(userimage);

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
      setUserImage(result.uri);
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
      setUserImage(result.uri);
    }

    setVisible(false);
  };

  function changeData() {
    dispatch(changeProfileAction(userName, userPassword, userImage, userEmail));
    navigation.navigate(HOME_SCREEN);
  }

  // Modal
  function showModal() {
    setVisible(true);
  }

  // header navegation
  useEffect(() => {
    navigation.setOptions({
      enableNavigation: true,
      title: 'Perfil',
      save: changeData,
    });
  }, [changeData, navigation]);

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
            {userImage ? (
              <Sty.Image source={{ uri: userImage }} />
            ) : (
              <Sty.IconInput />
            )}
            <Sty.ImageText>Mundar imagem</Sty.ImageText>
          </Sty.IconConteiner>
        </Sty.ImageContainer>
        <Sty.InputsContainer>
          <Sty.InputTitle>Nome</Sty.InputTitle>
          <Input
            iconType="ionicons"
            placeholder="Digite seu username"
            value={userName}
            onChangeText={setUserName}
            width={100}
          />
          <Sty.InputTitle>Email</Sty.InputTitle>
          <Input
            placeholder="Digite sua email"
            value={userEmail}
            onChangeText={setUserEmail}
            width={100}
          />
          <Sty.InputTitle>Senha</Sty.InputTitle>
          <Input
            placeholder="Digite sua senha"
            value={userPassword}
            onChangeText={setUsePassword}
            width={100}
          />
        </Sty.InputsContainer>
        <Sty.ButtonContainer>
          <Button label="Sair" actionBtn={console.log('saiu')} />
        </Sty.ButtonContainer>
      </Sty.Container>
    </KeyboardAvoidingView>
  );
};

export default Profile;
