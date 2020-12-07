import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CartProvider, useCart } from '../../hooks/cart';

const TestCartComponent: React.FC = () => {
  const {
    products,
    addToCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  function handleAddToCart(): void {
    addToCart({
      id: 312,
      name: 'Super Mario Odyssey',
      price: 197.88,
      score: 100,
      quantity: 1,
      image: 'https://i.ibb.co/cFXnmjm/super-mario-odyssey.png',
    });
  }

  function handleIncrementQuantity(): void {
    incrementQuantity(312);
  }

  function handleDecrementQuantity(): void {
    decrementQuantity(312);
  }
  return (
    <>
      <TouchableOpacity
        testID="add-new-product-to-cart"
        onPress={handleAddToCart}>
        Add to cart
      </TouchableOpacity>

      <TouchableOpacity
        testID={'increment-quantity'}
        onPress={handleIncrementQuantity}>
        Increment
      </TouchableOpacity>

      <TouchableOpacity
        testID={'decrement-quantity'}
        onPress={handleDecrementQuantity}>
        Decrement
      </TouchableOpacity>

      {products.map((item) => (
        <View key={item.id}>
          <Image source={require('../../assets/images/fifa-18.png')} />
          <Text>{item.name}</Text>
          <Text>{item.quantity}</Text>
          <View>
            <Text>{item.price}</Text>
            <TouchableOpacity
              testID={`add-cart-${item.id}`}
              onPress={() => addToCart(item)}>
              <Icon name="add" size={18} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

describe('Cart hook', () => {
  it('should be able to add a new product in cart', async () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestCartComponent />
      </CartProvider>,
    );

    act(() => {
      fireEvent.press(getByTestId('add-new-product-to-cart'));
    });

    expect(getByText('Super Mario Odyssey')).toBeTruthy();
    expect(getByText('1')).toBeTruthy(); //Quantity = 1
  });

  it('should be able to decrement on product quantity', async () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestCartComponent />
      </CartProvider>,
    );

    act(() => {
      fireEvent.press(getByTestId('add-new-product-to-cart')); //Quantity = 1
    });

    act(() => {
      fireEvent.press(getByTestId('increment-quantity')); //Quantity = 2
    });

    act(() => {
      fireEvent.press(getByTestId('decrement-quantity')); //Quantity = 1
    });

    expect(getByText('1')).toBeTruthy(); //Quantity = 1
  });

  it('should be able to increment on product quantity', async () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestCartComponent />
      </CartProvider>,
    );

    act(() => {
      fireEvent.press(getByTestId('add-new-product-to-cart'));
    });

    act(() => {
      fireEvent.press(getByTestId('increment-quantity'));
    });

    expect(getByText('2')).toBeTruthy();
  });
});
