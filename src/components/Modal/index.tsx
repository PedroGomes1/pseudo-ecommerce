import React, { useState, useCallback } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AnimatedModal from './animated';
import data from './data';
import {
  Modals,
  Indicator,
  HeaderModal,
  ContainerTitle,
  PriceRange,
  PriceContainer,
  TextPriceProductRange,
  TextFilter,
  ButtonClear,
  TextButtonClear,
  TitleScore,
  ContainerScore,
  Card,
  TextScore,
  TitleAlphabeticalOrder,
  CardAlphabeticalOrder,
  TextAlphabeticalOrder,
  ContainerButtons,
  ButtonApplyFilters,
  TextButtonApplyFilters,
  ButtonRejectedFilters,
  TextButtonRejectedFilters,
} from './styles';
import { ProductsProps } from '../../pages/Home';
import api from '../../services/api';

interface CardDataProps {
  id: number;
  text: string;
  splitText: string[];
}

interface ModalProps {
  show: boolean;
  close(): void;
  filteredProducts(product: ProductsProps[]): void;
}

const Modal: React.FC<ModalProps> = ({ show, close, filteredProducts }) => {
  const [price, setPrice] = useState<number[]>([]);
  const [score, setScore] = useState<CardDataProps>();
  const [isAlphabeticalOrder, setIsAlphabeticalOrder] = useState(false);

  const handleSelectedScore = useCallback(
    (card: Omit<CardDataProps, 'splitText'>) => {
      setScore({
        id: card.id,
        text: card.text,
        splitText: card.text.split('-'),
      });
    },
    [],
  );

  const handleClearAllFilters = useCallback(() => {
    setPrice([]);
    setScore(undefined);
    setIsAlphabeticalOrder(false);
  }, []);

  const handleApplyFilters = useCallback(async () => {
    const queryScore = score
      ? `score_gte=${score.splitText[0]}&score_lte=${score.splitText[1]}`
      : '';
    const queryPrice = price.length
      ? `&price_gte=${price[0]}&price_lte=${price[1]}`
      : '';
    const queryAlphabeticalOrder = isAlphabeticalOrder
      ? '&_sort=name&_order=asc'
      : '';

    const response = await api.get(
      `products?${queryScore}${queryPrice}${queryAlphabeticalOrder}`,
    );
    filteredProducts(response.data);
  }, [score, price, isAlphabeticalOrder, filteredProducts]);

  return (
    <AnimatedModal show={show}>
      <Modals>
        <Indicator />

        <HeaderModal>
          <TextFilter>Filtros</TextFilter>
          <ButtonClear onPress={handleClearAllFilters}>
            <TextButtonClear>Limpar todos </TextButtonClear>
          </ButtonClear>
        </HeaderModal>

        <ContainerTitle>
          <Icon name="attach-money" size={20} color="#32cd32" />
          <PriceRange>Faixa de preço</PriceRange>
        </ContainerTitle>

        <PriceContainer>
          <TextPriceProductRange>R${price[0] || 0}</TextPriceProductRange>
          <TextPriceProductRange>R${price[1] || 3000}</TextPriceProductRange>
        </PriceContainer>

        <MultiSlider
          isMarkersSeparated={true}
          min={0}
          max={3000}
          step={1}
          onValuesChange={(e) => setPrice(e)}
          values={[0, 3000]}
          sliderLength={310}
        />

        <ContainerTitle>
          <Icon name="star-outline" size={20} color="#FFFF00" />
          <TitleScore>Avaliação</TitleScore>
        </ContainerTitle>

        <ContainerScore>
          {data.map((item) => (
            <Card
              key={item.id}
              activeOpacity={0.8}
              onPress={() => handleSelectedScore(item)}
              isSelected={score?.id === item.id}>
              <TextScore>{item.text}</TextScore>
            </Card>
          ))}
        </ContainerScore>

        <ContainerTitle>
          <Icon name="sort-by-alpha" size={20} color="#054f77" />
          <TitleAlphabeticalOrder>Ordem alfabética</TitleAlphabeticalOrder>
        </ContainerTitle>

        <CardAlphabeticalOrder
          activeOpacity={0.8}
          onPress={() => setIsAlphabeticalOrder(!isAlphabeticalOrder)}
          isSelected={isAlphabeticalOrder}>
          <TextAlphabeticalOrder>a-Z</TextAlphabeticalOrder>
        </CardAlphabeticalOrder>

        <ContainerButtons>
          <ButtonApplyFilters
            onPress={() => {
              handleApplyFilters();
              close();
            }}>
            <TextButtonApplyFilters>Filtrar</TextButtonApplyFilters>
          </ButtonApplyFilters>

          <ButtonRejectedFilters onPress={close}>
            <TextButtonRejectedFilters>Fechar</TextButtonRejectedFilters>
          </ButtonRejectedFilters>
        </ContainerButtons>
      </Modals>
    </AnimatedModal>
  );
};

export default Modal;
