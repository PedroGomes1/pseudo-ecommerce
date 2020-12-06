import React from 'react';
import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import Home from '../../pages/Home';

const apiMock = new AxiosMock(api);

jest.mock('../../hooks/cart.tsx', () => ({
  useCart: jest.fn().mockReturnValue({
    addToCart: jest.fn(),
    products: [],
  }),
}));

describe('Home page', () => {
  it('should be list all products on home page', async () => {
    apiMock.onGet('products').reply(200, [
      {
        id: '312',
        name: 'Super Mario Odyssey',
        price: 197.88,
        score: 100,
        image: 'https://i.ibb.co/cFXnmjm/super-mario-odyssey.png',
      },
      {
        id: '201',
        name: 'Call Of Duty Infinite Warfare',
        price: 49.99,
        score: 80,
        image: 'https://i.ibb.co/k6FRRS3/call-of-duty-infinite-warfare.png',
      },
    ]);

    const { getByText, getByTestId } = render(<Home />);

    await waitFor(() => expect(getByText('Super Mario Odyssey')).toBeTruthy(), {
      timeout: 200,
    });

    expect(getByText('Super Mario Odyssey')).toBeTruthy();
    expect(getByTestId('add-cart-312')).toBeTruthy();

    expect(getByText('Call Of Duty Infinite Warfare')).toBeTruthy();
    expect(getByTestId('add-cart-201')).toBeTruthy();
  });

  it('should be list all products on home page by name search filter', async () => {
    const { getByText, getByTestId } = render(<Home />);

    const searchName = 'super';

    fireEvent.changeText(getByTestId('search-filter-name'), searchName);

    apiMock.onGet(`products?name_like=${searchName}`).reply(200, [
      {
        id: '312',
        name: 'Super Mario Odyssey',
        price: 197.88,
        score: 100,
        image: 'https://i.ibb.co/cFXnmjm/super-mario-odyssey.png',
      },
    ]);

    await waitFor(() => expect(getByText('Super Mario Odyssey')).toBeTruthy(), {
      timeout: 200,
    });

    expect(getByText('Super Mario Odyssey')).toBeTruthy();
  });
});
