import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../hooks/cart';
import formatPrice from '../../utils/formatPrice';
import {
  Container,
  Card,
  ButtonDeleteProduct,
  ProductImage,
  ProductInfos,
  Description,
  ProductPrice,
  ActionQuantity,
  ProductQuantity,
  ButtonIncrement,
  ButtonDecrement,
  ProductPriceFinal,
  TotalPaylable,
  CheckPrices,
  TitleInformation,
  SumProducts,
  DescriptionCheckPrices,
  PriceProducts,
  InfoTotalPrice,
  TextTotalPrice,
  TextValue,
  ButtonFinalizePayment,
  TextButtonFinalizePayment,
} from './styles';

const Cart: React.FC = () => {
  const {
    products,
    freightPrice,
    sumTotalProducts,
    removeToCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const formattedFreightPrice = useMemo(() => {
    return freightPrice > 250 ? formatPrice(0) : formatPrice(freightPrice);
  }, [freightPrice]);

  const formattedSumTotalProducts = useMemo(() => {
    return formatPrice(sumTotalProducts);
  }, [sumTotalProducts]);

  const sumOfTotalOrder = useMemo(() => {
    const total = sumTotalProducts + freightPrice;

    return formatPrice(total);
  }, [sumTotalProducts, freightPrice]);

  return (
    <>
      <Container showsVerticalScrollIndicator={false}>
        {products.map((product) => (
          <Card key={product.id}>
            <ButtonDeleteProduct onPress={() => removeToCart(product.id)}>
              <Icon name="close" size={18} color="#000000" />
            </ButtonDeleteProduct>

            <ProductImage
              source={{
                uri: product.image,
              }}
            />

            <ProductInfos>
              <Description>{product.name}</Description>

              <ProductPrice>{product.price}</ProductPrice>

              <ActionQuantity>
                <ButtonIncrement
                  testID={`increment-quantity-${product.id}`}
                  onPress={() => incrementQuantity(product.id)}>
                  <Icon name="add" size={15} color="#fff" />
                </ButtonIncrement>
                <ProductQuantity>{product.quantity}</ProductQuantity>
                <ButtonDecrement
                  testID={`decrement-quantity-${product.id}`}
                  onPress={() => decrementQuantity(product.id)}>
                  <Icon name="remove" size={15} color="#fff" />
                </ButtonDecrement>
                <ProductPriceFinal>
                  {formatPrice(product.price * product.quantity)}
                </ProductPriceFinal>
              </ActionQuantity>
            </ProductInfos>
          </Card>
        ))}

        <CheckPrices>
          <TitleInformation>Informações do pedido</TitleInformation>
          <SumProducts>
            <DescriptionCheckPrices>Produtos</DescriptionCheckPrices>
            <PriceProducts>{formattedSumTotalProducts}</PriceProducts>
          </SumProducts>

          <SumProducts>
            <DescriptionCheckPrices>Frete</DescriptionCheckPrices>
            <PriceProducts>{formattedFreightPrice}</PriceProducts>
          </SumProducts>
        </CheckPrices>
      </Container>

      <TotalPaylable>
        <InfoTotalPrice>
          <TextTotalPrice>Preço total:</TextTotalPrice>
          <TextValue>{sumOfTotalOrder}</TextValue>
        </InfoTotalPrice>

        <ButtonFinalizePayment>
          <TextButtonFinalizePayment>Finalizar</TextButtonFinalizePayment>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </ButtonFinalizePayment>
      </TotalPaylable>
    </>
  );
};

export default Cart;
