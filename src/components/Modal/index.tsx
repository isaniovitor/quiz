import { useNavigation } from '@react-navigation/core';
import { cloneDeep } from 'lodash';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { Portal, Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/entities/AplicationState';
import correct from '~/assets/correct.png';
import incorrect from '~/assets/incorrect.png';

import * as S from './styles';

interface Props {
  visible: boolean;
  setVisible: (show: boolean) => void;
  labelButtonLeft: string;
  labelButtonRight?: string;
  actionButtonLeft: () => void;
  actionButtonRight?: () => void;
}

export function ModalGlobal({
  visible,
  setVisible,
  labelButtonLeft,
  labelButtonRight,
  actionButtonLeft,
  actionButtonRight,
}: Props) {
  const hideModal = () => setVisible(false);
  const { Colors } = useContext(ThemeContext);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={S.containerModal}
      >
        <S.Container
          style={{ backgroundColor: Colors.BACKGROUND_BUTTON_WHITE }}
        >
          <S.Button onPress={() => actionButtonLeft()}>
            <S.TextButton style={{ color: Colors.BUTTONWHITE_TEXT }}>
              {labelButtonLeft}
            </S.TextButton>
          </S.Button>
          {actionButtonRight && (
            <S.Button onPress={() => actionButtonRight()}>
              <S.TextButton style={{ color: Colors.BUTTONWHITE_TEXT }}>
                {labelButtonRight}
              </S.TextButton>
            </S.Button>
          )}
        </S.Container>
      </Modal>
    </Portal>
  );
}
