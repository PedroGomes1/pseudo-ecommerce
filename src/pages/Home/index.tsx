import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import IconSearch from 'react-native-vector-icons/MaterialIcons';
import IconFilter from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

interface ProductsProps {
  id: string;
  name: string;
  price: string;
  score: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
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
          keyExtractor={(item) => item.id}
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
                  <ProductPrice>R${item.price}</ProductPrice>
                  <ButtonAddProduct>
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
