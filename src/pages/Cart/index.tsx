import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  InfoTotalPrice,
  TextTotalPrice,
  TextValue,
  ButtonFinalizePayment,
  TextButtonFinalizePayment,
} from './styles';

const Cart: React.FC = () => {
  return (
    <>
      <Container showsVerticalScrollIndicator={false}>
        <Card>
          <ButtonDeleteProduct>
            <Icon name="close" size={15} color="#000000" />
          </ButtonDeleteProduct>

          <ProductImage
            source={{
              uri:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
            }}
          />

          <ProductInfos>
            <Description>Cadeira louca do Pedro asdf asdf</Description>

            <ProductPrice>R$ 300,00</ProductPrice>

            <ActionQuantity>
              <ButtonIncrement>
                <Icon name="add" size={15} color="#fff" />
              </ButtonIncrement>
              <ProductQuantity>3</ProductQuantity>
              <ButtonDecrement>
                <Icon name="remove" size={15} color="#fff" />
              </ButtonDecrement>
              <ProductPriceFinal>R$1.5000,99</ProductPriceFinal>
            </ActionQuantity>
          </ProductInfos>
        </Card>

        <Card>
          <ButtonDeleteProduct>
            <Icon name="close" size={15} color="#000000" />
          </ButtonDeleteProduct>

          <ProductImage
            source={{
              uri:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
            }}
          />

          <ProductInfos>
            <Description>Cadeira louca do Pedro asdf asdf</Description>

            <ProductPrice>R$ 300,00</ProductPrice>

            <ActionQuantity>
              <ButtonIncrement>
                <Icon name="add" size={15} color="#fff" />
              </ButtonIncrement>
              <ProductQuantity>3</ProductQuantity>
              <ButtonDecrement>
                <Icon name="remove" size={15} color="#fff" />
              </ButtonDecrement>
              <ProductPriceFinal>R$1.5000,99</ProductPriceFinal>
            </ActionQuantity>
          </ProductInfos>
        </Card>

        <Card>
          <ButtonDeleteProduct>
            <Icon name="close" size={15} color="#000000" />
          </ButtonDeleteProduct>

          <ProductImage
            source={{
              uri:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
            }}
          />

          <ProductInfos>
            <Description>Cadeira louca do Pedro asdf asdf</Description>

            <ProductPrice>R$ 300,00</ProductPrice>

            <ActionQuantity>
              <ButtonIncrement>
                <Icon name="add" size={15} color="#fff" />
              </ButtonIncrement>
              <ProductQuantity>3</ProductQuantity>
              <ButtonDecrement>
                <Icon name="remove" size={15} color="#fff" />
              </ButtonDecrement>
              <ProductPriceFinal>R$1.5000,99</ProductPriceFinal>
            </ActionQuantity>
          </ProductInfos>
        </Card>

        <Card>
          <ButtonDeleteProduct>
            <Icon name="close" size={15} color="#000000" />
          </ButtonDeleteProduct>

          <ProductImage
            source={{
              uri:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
            }}
          />

          <ProductInfos>
            <Description>Cadeira louca do Pedro asdf asdf</Description>

            <ProductPrice>R$ 300,00</ProductPrice>

            <ActionQuantity>
              <ButtonIncrement>
                <Icon name="add" size={15} color="#fff" />
              </ButtonIncrement>
              <ProductQuantity>3</ProductQuantity>
              <ButtonDecrement>
                <Icon name="remove" size={15} color="#fff" />
              </ButtonDecrement>
              <ProductPriceFinal>R$159,99</ProductPriceFinal>
            </ActionQuantity>
          </ProductInfos>
        </Card>

        <Card>
          <ButtonDeleteProduct>
            <Icon name="close" size={15} color="#000000" />
          </ButtonDeleteProduct>

          <ProductImage
            source={{
              uri:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
            }}
          />

          <ProductInfos>
            <Description>Cadeira louca do Pedro asdf asdf</Description>

            <ProductPrice>R$ 300,00</ProductPrice>

            <ActionQuantity>
              <ButtonIncrement>
                <Icon name="add" size={15} color="#fff" />
              </ButtonIncrement>
              <ProductQuantity>3</ProductQuantity>
              <ButtonDecrement>
                <Icon name="remove" size={15} color="#fff" />
              </ButtonDecrement>
              <ProductPriceFinal>R$150,99</ProductPriceFinal>
            </ActionQuantity>
          </ProductInfos>
        </Card>

        <Card>
          <ButtonDeleteProduct>
            <Icon name="close" size={15} color="#000000" />
          </ButtonDeleteProduct>

          <ProductImage
            source={{
              uri:
                'https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg',
            }}
          />

          <ProductInfos>
            <Description>Cadeira louca do Pedro asdf asdf</Description>

            <ProductPrice>R$ 300,00</ProductPrice>

            <ActionQuantity>
              <ButtonIncrement>
                <Icon name="add" size={15} color="#fff" />
              </ButtonIncrement>
              <ProductQuantity>3</ProductQuantity>
              <ButtonDecrement>
                <Icon name="remove" size={15} color="#fff" />
              </ButtonDecrement>
              <ProductPriceFinal>R$30,99</ProductPriceFinal>
            </ActionQuantity>
          </ProductInfos>
        </Card>
      </Container>

      <TotalPaylable>
        <InfoTotalPrice>
          <TextTotalPrice>Preço total:</TextTotalPrice>
          <TextValue>R$ 250,00</TextValue>
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
