import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../components/utility/safe-area.component";
import { ProdutListcard } from "./produt-list-info-card.component.js";
import { Spacer } from "../components/spacer/spacer.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const Products = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ProductList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <ProdutListcard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
      // horizontal={true}
    />
  </SafeArea>
);
 