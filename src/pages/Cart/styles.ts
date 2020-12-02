import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f9fbf2;
`;

export const Card = styled.View`
  margin: 15px 25px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.55);
  elevation: 5;
  border-radius: 10px;
  padding: 15px 10px;
`;

export const ButtonDeleteProduct = styled(RectButton)`
  position: absolute;
  background: #e9e8ec;
  border-radius: 5px;
  top: 0px;
  right: 0px;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 92px;
`;

export const ProductInfos = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  color: #a0a0b3;
  margin-top: 8px;
  font-family: 'Roboto-Regular';
`;

// export const ProductTotal = styled.Text`
//   font-size: 18px;
//   color: #0acf83;
//   margin-top: 8px;
//   font-family: 'Roboto-Bold';
// `;

export const ActionQuantity = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 8px;
`;

export const ProductQuantity = styled.Text`
  margin: 0px 10px;
  font-family: 'Roboto-Regular';
`;

export const ButtonIncrement = styled(RectButton)`
  width: 25px;
  height: 25px;
  background: #0acf83;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const ButtonDecrement = styled(RectButton)`
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  background: #0acf83;
  border-radius: 5px;
`;

export const ProductPriceFinal = styled.Text`
  margin-left: auto;
  font-family: 'Roboto-Bold';
  font-size: 16px;
`;

export const TotalPaylable = styled.View`
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-width: 2px;

  background: rgba(255, 255, 255, 0.5);
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;
`;

export const InfoTotalPrice = styled.View``;

export const TextTotalPrice = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Medium';
`;

export const TextValue = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Bold';
`;

export const ButtonFinalizePayment = styled(RectButton)`
  width: 140px;
  height: 40px;
  border-radius: 50px;
  background: #0acf83;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const TextButtonFinalizePayment = styled.Text`
  color: #fff;
  font-family: 'Poppins-Medium';
`;
