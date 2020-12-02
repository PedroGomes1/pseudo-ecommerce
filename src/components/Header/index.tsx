import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/images/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, CartInfo, QuantityItem } from './styles';

const Header: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToCart = () => {
    navigate('Cart');
  };

  return (
    <Container>
      <Image source={logo} />
      <CartInfo onPress={handleNavigateToCart}>
        <Icon name="shopping-cart" size={25} color="#000000" />
        <QuantityItem>3</QuantityItem>
      </CartInfo>
    </Container>
  );
};

export default Header;
