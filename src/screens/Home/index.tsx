import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import ButtonCategory from '~/components/category';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';
import { PROFILE_SCREEN, QUEST_SCREEN } from '~/constants/routes';
import { getCategorySubjectAction } from '~/store/ducks/category/actions';

import * as Sty from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [idCategory, setIdCategory] = useState(10);
  // const { theme } = useSelector((state: AplicationState) => state.theme);
  const { categoryListSubject } = useSelector(
    (state: AplicationState) => state.category,
  );

  console.tron.log('categories', categoryListSubject);

  function handleViewProfile() {
    // passar id por aq?
    navigation.navigate(PROFILE_SCREEN);
  }

  function handleQuest() {
    navigation.navigate(QUEST_SCREEN, { category: idCategory });
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
          data={categoryListSubject}
          extraData={categoryListSubject}
          renderItem={renderCategory}
          keyExtractor={(item: any, index: any) => index}
        />
      </Sty.ListContainer>
    </Sty.Container>
  );
};

export default Home;
