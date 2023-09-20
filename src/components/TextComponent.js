import React from "react";
import { Text } from "react-native-paper";

const TextComponent = ({ label = "", onClickFlag = false, style, onPress }) => {
  return (
    <>
      {onClickFlag ? (
        <Text style={style} adjustsFontSizeToFit={true} onPress={onPress}>
          {label}
        </Text>
      ) : (
        <Text adjustsFontSizeToFit={true} style={style}>
          {label}
        </Text>
      )}
    </>
  );
};

export default TextComponent;
