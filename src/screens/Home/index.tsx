import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { useSelector } from 'react-redux';

import Button from '~/components/Button';
import ButtonCategory from '~/components/category';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { PROFILE_SCREEN, QUEST_SCREEN } from '~/constants/routes';

import * as Sty from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const CATEGORIES = [
    { id: 1, name: 'Carnes' },
    { id: 2, name: 'Frutas' },
    { id: 3, name: 'Legumes' },
    { id: 4, name: 'Limpeza' },
    { id: 1, name: 'Carnes' },
    { id: 2, name: 'Frutas' },
    { id: 3, name: 'Legumes' },
    { id: 4, name: 'Limpeza' },
    { id: 1, name: 'Carnes' },
    { id: 2, name: 'Frutas' },
    { id: 3, name: 'Legumes' },
    { id: 4, name: 'Limpeza' },
  ];
  const { theme } = useSelector((state: AplicationState) => state.theme);

  function handleViewProfile() {
    navigation.navigate(PROFILE_SCREEN);
  }

  function handleQuest() {
    navigation.navigate(QUEST_SCREEN);
  }

  // header navegation
  useEffect(() => {
    navigation.setOptions({
      iconProfile: true,
      iconProfileAction: handleViewProfile,
    });
  }, [navigation, handleViewProfile]);

  function renderCategory({ item }: any) {
    return (
      <>
        <ButtonCategory label={item.name} actionBtn={handleQuest} />
      </>
    );
  }

  return (
    <Sty.Container>
      <Sty.ListContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={CATEGORIES}
          extraData={CATEGORIES}
          renderItem={renderCategory}
          keyExtractor={(item: any, index: any) => index}
        />
      </Sty.ListContainer>
    </Sty.Container>
  );
};

export default Home;
