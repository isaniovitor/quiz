import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Input from '~/components/Input';

import type { AplicationState } from '~/@types/entities/AplicationState';
import { toogleTheme } from '~/store/ducks/theme/actions';

import * as Sty from './styles';

interface HeaderProps {
  title?: string;
  headerMenu: boolean;
  navigation: any;
  options: any;
}

export function Header({
  title,
  headerMenu,
  navigation,
  options,
}: HeaderProps) {
  // const { theme } = useSelector((state: AplicationState) => state.theme);
  const dispatch = useDispatch();
  const { userimage } = useSelector((state: AplicationState) => state.user);

  return (
    <Sty.Container headerMenu={headerMenu}>
      {/* mudar tema aq */}
      <Sty.AceContainer>
        <Sty.ButtonLeft onPress={() => dispatch(toogleTheme())}>
          <Sty.IconChangeTheme />
        </Sty.ButtonLeft>
      </Sty.AceContainer>
      {headerMenu && (
        <Sty.HeaderContainer>
          {/* componentes da tela com voltar */}
          {options?.enableNavigation && (
            <>
              <Sty.ButtonLeft onPress={() => navigation.goBack()}>
                <Sty.IconBack />
              </Sty.ButtonLeft>
              <Sty.Title>{title || options?.title}</Sty.Title>
            </>
          )}

          {/* componentes da tela home */}
          {options?.iconProfile && (
            <>
              <Sty.ButtonLeft onPress={() => options.iconProfileAction()}>
                {userimage ? (
                  <Sty.ImageProfile source={{ uri: userimage }} />
                ) : (
                  <Sty.IconProfile />
                )}
              </Sty.ButtonLeft>
              <Sty.StatusBar />
              <Sty.InputContainer>
                <Input
                  iconLeft="search"
                  iconType="ionicons"
                  placeholder="Digite uma categoria"
                  // value={userName}
                  // onChangeText={setUserName}
                  width={100}
                />
              </Sty.InputContainer>
            </>
          )}

          {/* componentes da tela perfil */}
          {options?.save && (
            <>
              <Sty.ButtonLeft onPress={() => options.save()}>
                <Sty.IconSaveData />
              </Sty.ButtonLeft>
            </>
          )}
        </Sty.HeaderContainer>
      )}
    </Sty.Container>
  );
}

export const headerOption = {
  header: (props: any) => <Header {...props} />,
};