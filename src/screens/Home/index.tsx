import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ButtonCategory from '~/components/category';
import Indicator from '~/components/Indicator';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { QuestionProps } from '~/@types/entities/Question';
import { PROFILE_SCREEN, QUEST_SCREEN } from '~/constants/routes';
import { getQuestionsAction } from '~/store/ducks/questions/actions';

import * as Sty from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [idSelectedCategory, setIdSelectedCategory] = useState(0);
  const [listItemsFilter, setListItemsFilter] = useState<QuestionProps[] | []>(
    [],
  );
  const { categoryList } = useSelector(
    (state: AplicationState) => state.category,
  );
  const { loadingQuestions } = useSelector(
    (state: AplicationState) => state.questions,
  );

  const handleViewProfile = useCallback(() => {
    navigation.navigate(PROFILE_SCREEN);
  }, [navigation]);

  function handleQuest(id: number) {
    dispatch(getQuestionsAction(id, 'easy'));
  }

  // header navegation
  useEffect(() => {
    navigation.setOptions({
      iconProfile: true,
      iconProfileAction: handleViewProfile,
      search,
      setSearch,
    });
  }, [navigation, handleViewProfile, search]);

  // start search effects
  const updateItemsFilter = useCallback(() => {
    let itemsFilter: QuestionProps[] | [] = [];
    itemsFilter = categoryList.filter(listItem => {
      return listItem.name.toUpperCase().includes(search.toUpperCase());
    });

    setListItemsFilter(itemsFilter);
  }, [categoryList, search]);

  useEffect(() => {
    if (search) {
      updateItemsFilter();
    } else {
      setListItemsFilter([]);
    }
  }, [search, updateItemsFilter]);
  // end search effects

  useEffect(() => {
    if (loadingQuestions) setVisible(true);
    else {
      navigation.navigate(QUEST_SCREEN, { category: idSelectedCategory });
      setVisible(false);
    }
  }, [navigation, loadingQuestions]);

  function renderCategory({ item }: any) {
    return (
      <ButtonCategory
        label={item.name}
        actionBtn={() => {
          handleQuest(item.id);
          setIdSelectedCategory(item.id);
        }}
      />
    );
  }

  return (
    <Sty.Container>
      {visible && <Indicator label="Aguarde!" />}

      <Sty.ListContainer>
        {listItemsFilter.length > 0 ? (
          <FlatList
            data={listItemsFilter}
            extraData={listItemsFilter}
            renderItem={renderCategory}
            keyExtractor={(item: any, index: any) => index}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={categoryList}
            extraData={categoryList}
            renderItem={renderCategory}
            keyExtractor={(item: any, index: any) => index}
          />
        )}
      </Sty.ListContainer>
    </Sty.Container>
  );
};

export default Home;
