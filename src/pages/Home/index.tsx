import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import IconSearch from 'react-native-vector-icons/MaterialIcons';
import IconFilter from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useCart } from '../../hooks/cart';
import formatPrice from '../../utils/formatPrice';
import api from '../../services/api';
import {
  Container,
  ContainerHeader,
  Title,
  TotalProductsText,
  ContainerFilters,
  ContainerCards,
  ContainerInputSearch,
  InputSearchname,
  ButtonFilters,
  ScrollViewCards,
  Card,
  ProductImage,
  ProductDescription,
  ContainerPrice,
  ContainerPriceItens,
  ProductPrice,
  ButtonAddProduct,
} from './styles';

export interface ProductsProps {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  priceFormatted: string;
  quantity: number;
}

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(
        response.data.map((product: ProductsProps) => ({
          ...product,
          priceFormatted: formatPrice(Number(product.price)),
        })),
      );
    }

    loadProducts();
  }, []);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <ContainerHeader>
        <Title>Catálogo</Title>
        <TotalProductsText>Total de 10 produtos encontrados</TotalProductsText>

        <ContainerFilters>
          <ContainerInputSearch>
            <IconSearch name="search" size={30} color="#bababa" />
            <InputSearchname placeholder="Buscar pelo nome do produto" />
          </ContainerInputSearch>

          <ButtonFilters>
            <IconFilter name="sliders" size={25} color="#ffffff" />
          </ButtonFilters>
        </ContainerFilters>
      </ContainerHeader>

      <ScrollViewCards>
        <ContainerCards
          data={products}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          nestedScrollEnabled
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Card>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductDescription>{item.name}</ProductDescription>

              <ContainerPrice>
                <ContainerPriceItens>
                  <ProductPrice>{item.priceFormatted}</ProductPrice>
                  <ButtonAddProduct onPress={() => addToCart(item)}>
                    <Icon name="add" size={18} color="#FFF" />
                  </ButtonAddProduct>
                </ContainerPriceItens>
              </ContainerPrice>
            </Card>
          )}
        />
      </ScrollViewCards>
    </Container>
  );
};

export default Home;
