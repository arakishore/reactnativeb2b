import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ProductListCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: 4px;
`;

export const ProductListCardCover = styled(Card.Cover)`
  padding: 4px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
 
`;

export const Address = styled.Text`
  font-family: ${(props) => 'Poppins-Regular'};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
 

export const Section = styled.View`
flex: 1;
flex-direction: row;

border:1px;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  border:1px;
`;