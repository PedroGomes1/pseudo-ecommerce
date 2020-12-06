import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../hooks/cart';
import { Container, CartInfo, QuantityItem } from './styles';

const Header: React.FC = () => {
  const { products } = useCart();
  const { navigate } = useNavigation();

  const handleNavigateToCart = () => {
    navigate('Cart');
  };

  return (
    <Container>
      <CartInfo onPress={handleNavigateToCart}>
        <Icon name="shopping-cart" size={25} color="#000000" />
        <QuantityItem>{products.length}</QuantityItem>
      </CartInfo>
    </Container>
  );
};

export default Header;
