import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  score: number;
  image: string;
}

interface CartContext {
  products: Product[];
  addToCart(product: Product): void;
  removeToCart(id: number): void;
  incrementQuantity(id: number): void;
  decrementQuantity(id: number): void;
  sumTotalProducts: number;
  freightPrice: number;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [freightPrice, setFreightPrice] = useState(0);

  const addToCart = useCallback(
    (product: Product) => {
      const filterCartAlreadyAdded = products.findIndex(
        (productList) => product.id === productList.id,
      );

      const newProduct = {
        ...product,
        quantity: 1,
      };

      if (filterCartAlreadyAdded === -1) {
        setProducts([...products, newProduct]);
        setFreightPrice((state) => state + 10);
      }
    },
    [products],
  );

  const sumTotalProducts = useMemo(() => {
    const getTotalPrices = products.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
    return getTotalPrices;
  }, [products]);

  const incrementQuantity = useCallback(
    (id: number) => {
      const searchProduct = products.findIndex((product) => product.id === id);

      if (searchProduct >= 0) {
        products[searchProduct].quantity += 1;
        setProducts([...products]);
      }
    },
    [products],
  );

  const decrementQuantity = useCallback(
    (id: number) => {
      const searchProduct = products.findIndex((product) => product.id === id);

      if (searchProduct >= 0 && products[searchProduct].quantity > 1) {
        products[searchProduct].quantity -= 1;
        setProducts([...products]);
      }
    },
    [products],
  );

  const removeToCart = useCallback(
    (id: number) => {
      const allProducts = products.filter((product) => product.id !== id);

      setProducts(allProducts);
      setFreightPrice((state) => state - 10);
    },
    [products],
  );

  return (
    <CartContext.Provider
      value={{
        addToCart,
        products,
        freightPrice,
        sumTotalProducts,
        incrementQuantity,
        decrementQuantity,
        removeToCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContext {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
