import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface CardProps {
  isSelected: boolean;
}

interface isAlphabeticalOrderProps {
  isSelected: boolean;
}

export const Modals = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 99%;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 20px;
`;

export const Indicator = styled.View`
  width: 50px;
  height: 5px;
  background-color: #ccc;
  border-radius: 20px;
  align-self: center;
  margin-top: 5px;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  padding: 5px 0;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 2px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 20px;
`;

export const PriceRange = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;

  margin-left: 5px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const TextPriceProductRange = styled.Text`
  font-family: 'Roboto-Regular';
`;

export const TextQuantity = styled.Text`
  font-family: 'Roboto-Reguular';
  font-size: 16px;
`;

export const TextFilter = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 24px;
`;
export const ButtonClear = styled(RectButton)`
  padding: 5px;
`;

export const TextButtonClear = styled.Text`
  color: #bababa;
  text-align: center;
  font-weight: bold;
`;

export const TitleScore = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;

  margin-left: 5px;
`;

export const ContainerScore = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.TouchableOpacity<CardProps>`
  width: 75px;
  height: 75px;
  border-radius: 10px;
  border: ${({ isSelected }) =>
    isSelected ? '2px solid black' : '2px solid #bababa'};
  justify-content: center;
  align-items: center;
`;

export const TextScore = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Medium';
`;

export const TitleAlphabeticalOrder = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;

  margin-left: 5px;
`;

export const CardAlphabeticalOrder = styled.TouchableOpacity<isAlphabeticalOrderProps>`
  border: ${({ isSelected }) =>
    isSelected ? '2px solid black' : '2px solid #bababa'};

  width: 50px;
  height: 50px;

  margin: 0 auto;

  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const TextAlphabeticalOrder = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Medium';
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonApplyFilters = styled(RectButton)`
  width: 150px;
  height: 40px;

  background-color: #0acf83;
  border-radius: 50px;

  align-items: center;
  justify-content: center;

  margin: 15px auto 0;
`;
export const TextButtonApplyFilters = styled.Text`
  color: #fff;
  font-family: 'Poppins-Medium';

  font-size: 16px;
`;

export const ButtonRejectedFilters = styled(ButtonApplyFilters)`
  background-color: red;
`;

export const TextButtonRejectedFilters = styled(TextButtonApplyFilters)``;
