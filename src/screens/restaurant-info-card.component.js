import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../components/spacer/spacer.component";
import { Text } from "../components/typography/text.component";
import star from "../../assets/star";
import open from "../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "../components/restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "product Name",
   
    photos = [
        "https://images.unsplash.com/photo-1572978577954-0b789bb5a7ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    detail = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    
    
  } = restaurant;

  //const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          
          <SectionEnd>
          <Text variant="error">Add to Cart</Text>
            
          </SectionEnd>
        </Section>
        <Address>{detail}</Address>
      </Info>
    </RestaurantCard>
  );
};
