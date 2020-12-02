import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { ProductsProps } from './index';

export const Container = styled.ScrollView`
  background-color: #95d7ae;
  flex: 1;
`;

export const ContainerHeader = styled.View`
  background: #95d7ae;
  padding: 0 24px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Medium';
  margin-bottom: 5px;
`;
export const TotalProductsText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  margin-bottom: 10px;
  color: #000000;
`;

export const ContainerFilters = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerInputSearch = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  margin-right: 10px;
  background: #ffffff;
  border: 1px solid #bababa;
  border-radius: 10px;
  padding: 0 10px;
`;

export const InputSearchname = styled.TextInput`
  flex: 1;
`;

export const ButtonFilters = styled(RectButton)`
  width: 50px;
  height: 50px;
  background-color: #0acf83;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const ScrollViewCards = styled.View`
  flex: 1;
  margin-top: 20px;
  background-color: #f9fbf2;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

// eslint-disable-next-line prettier/prettier
export const ContainerCards = styled(FlatList as new () => FlatList<ProductsProps>)`
  flex-direction: row;
  margin: 50px auto 0;
`;
export const Card = styled.View`
  margin: 8px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  elevation: 5;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const ProductDescription = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  max-width: 120px;
  font-family: 'Poppins-Regular';
`;

export const ContainerPrice = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ContainerPriceItens = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  color: #000000;
  text-align: left;
  font-family: 'Roboto-Bold';
`;

export const ButtonAddProduct = styled.TouchableOpacity`
  background: #0acf83;
  border-radius: 13px;
  width: 26px;
  height: 26px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
