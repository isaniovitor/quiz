import React, { useContext } from 'react';
import type { ImageSourcePropType } from 'react-native';
import { Portal, Modal } from 'react-native-paper';
import { ThemeContext } from 'styled-components/native';

import * as S from './styles';

interface Props {
  image: ImageSourcePropType;
  visible: boolean;
  setVisible: (show: boolean) => void;
  labelButton: string;
  actionButton: () => void;
}

export function FeedBackModal({
  image,
  visible,
  setVisible,
  labelButton,
  actionButton,
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
        <S.Container style={{ backgroundColor: Colors.BACKGROUND_WHITE }}>
          <S.ImageContainer>
            <S.Image source={image} />
          </S.ImageContainer>

          <S.Button
            onPress={() => actionButton()}
            style={{ backgroundColor: Colors.BUTTON_COLOR }}
          >
            <S.TextButton style={{ color: Colors.BUTTON_WHITE_TO_BLACK }}>
              {labelButton}
            </S.TextButton>
          </S.Button>
        </S.Container>
      </Modal>
    </Portal>
  );
}
