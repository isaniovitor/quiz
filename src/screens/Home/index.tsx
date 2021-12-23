import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import ButtonCategory from '~/components/category';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';
import { PROFILE_SCREEN, QUEST_SCREEN } from '~/constants/routes';
import { getQuestionsAction } from '~/store/ducks/questions/actions';

import * as Sty from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { categoryList } = useSelector(
    (state: AplicationState) => state.category,
  );
  // const { questionsList } = useSelector(
  //   (state: AplicationState) => state.question,
  // );

  function handleViewProfile() {
    navigation.navigate(PROFILE_SCREEN);
  }

  function handleQuest(id: number) {
    dispatch(getQuestionsAction(id, 'easy'));
    // console.tron.log('quests', questionsList);
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
      <ButtonCategory
        label={item.name}
        actionBtn={() => handleQuest(item.id)}
      />
    );
  }

  return (
    <Sty.Container>
      <Sty.ListContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={categoryList}
          extraData={categoryList}
          renderItem={renderCategory}
          keyExtractor={(item: any, index: any) => index}
        />
      </Sty.ListContainer>
    </Sty.Container>
  );
};

export default Home;
