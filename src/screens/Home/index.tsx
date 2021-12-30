import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import ButtonCategory from '~/components/category';
import Indicator from '~/components/Indicator';

import type { AplicationState } from '~/@types/entities/AplicationState';
import type { CategoryProps } from '~/@types/entities/Category';
import { PROFILE_SCREEN, QUEST_SCREEN } from '~/constants/routes';
import { getQuestionsAction } from '~/store/ducks/questions/actions';

import * as Sty from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [currentList, setCurrentList] = useState<CategoryProps[] | []>([]);
  const [visible, setVisible] = useState(false);
  const [idSelectedCategory, setIdSelectedCategory] = useState(0);
  const [listItemsFilter, setListItemsFilter] = useState<CategoryProps[] | []>(
    [],
  );
  const { categoryList } = useSelector(
    (state: AplicationState) => state.category,
  );
  const { loadingQuestions } = useSelector(
    (state: AplicationState) => state.questions,
  );
  const { loadingCategory } = useSelector(
    (state: AplicationState) => state.category,
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
    let itemsFilter: CategoryProps[] | [] = [];
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

  useEffect(() => {
    if (listItemsFilter.length > 0) {
      setCurrentList(listItemsFilter);
    } else {
      setCurrentList(categoryList);
    }
  }, [categoryList, listItemsFilter]);
  // end search effects

  useEffect(() => {
    if (loadingQuestions) setVisible(true);
    else {
      setVisible(false);
      navigation.navigate(QUEST_SCREEN, { category: idSelectedCategory });
    }
  }, [navigation, loadingQuestions, idSelectedCategory, loadingCategory]);

  return (
    <Sty.Container>
      {visible && <Indicator label="Aguarde!" />}

      <Sty.ListContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          {currentList.map(categoty => {
            return (
              <ButtonCategory
                key={categoty.id}
                label={categoty.name}
                actionBtn={() => {
                  handleQuest(categoty.id);
                  setIdSelectedCategory(categoty.id);
                }}
              />
            );
          })}
        </ScrollView>
      </Sty.ListContainer>
    </Sty.Container>
  );
};

export default Home;
