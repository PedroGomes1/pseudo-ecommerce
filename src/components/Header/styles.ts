import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const CartInfo = styled(RectButton)``;

export const QuantityItem = styled.Text`
  color: #fff;
  background: #0acf83;
  position: absolute;
  right: -3px;
  top: -8px;
  min-width: 16px;
  min-height: 16px;
  border-radius: 8px;
  text-align: center;
`;
