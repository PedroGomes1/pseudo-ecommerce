import React, { useCallback, useEffect, useState } from 'react';
import IconFilter from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from '../../components/Modal';
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
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function loadProducts() {
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

  const filteredProducts = useCallback((product: ProductsProps[]) => {
    setProducts(
      product.map((productItem) => ({
        ...productItem,
        priceFormatted: formatPrice(Number(productItem.price)),
      })),
    );
  }, []);

  const handleSearchByName = useCallback(async (name: string) => {
    const response = await api.get(`products?name_like=${name}`);
    setProducts(
      response.data.map((product: ProductsProps) => ({
        ...product,
        priceFormatted: formatPrice(Number(product.price)),
      })),
    );
  }, []);

  return (
    <Container showsVerticalScrollIndicator={false} scrollEnabled={!modal}>
      <ContainerHeader>
        <Title>Catálogo</Title>

        <TotalProductsText>
          Total de {products.length} produtos encontrados
        </TotalProductsText>

        <ContainerFilters>
          <ContainerInputSearch>
            <Icon name="search" size={30} color="#bababa" />
            <InputSearchname
              placeholder="Buscar pelo nome do produto"
              onChangeText={(text) => handleSearchByName(text)}
            />
          </ContainerInputSearch>

          <ButtonFilters onPress={() => setModal(true)}>
            <IconFilter name="sliders" size={25} color="#ffffff" />
          </ButtonFilters>
        </ContainerFilters>
      </ContainerHeader>

      {modal && (
        <Modal
          show={modal}
          close={() => setModal(false)}
          filteredProducts={filteredProducts}
        />
      )}

      <ScrollViewCards>
        <ContainerCards
          data={products}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card>
              <ProductImage
                source={require('../../assets/images/fifa-18.png')}
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
