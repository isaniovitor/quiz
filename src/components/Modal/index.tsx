import { useNavigation } from '@react-navigation/core';
import { cloneDeep } from 'lodash';
import React from 'react';
import { Portal, Modal } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/entities/AplicationState';

import * as S from './styles';

interface Props {
  visible: boolean;
  setVisible: (show: boolean) => void;
  actionButtonLeft?: () => Promise<void>;
  actionButtonRight?: () => void;
}

export function ModalGlobal({
  visible,
  setVisible,
  actionButtonLeft,
  actionButtonRight,
}: Props) {
  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={S.containerModal}
      >
        <S.Container>
          <S.Button onPress={() => actionButtonLeft()}>
            <S.TextButton>Tirar foto</S.TextButton>
          </S.Button>
          <S.Button onPress={() => actionButtonRight()}>
            <S.TextButton>Galeria</S.TextButton>
          </S.Button>
        </S.Container>
      </Modal>
    </Portal>
  );
}
