import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RuppeeIcon = () => {
  return (
    <Text style={styles.priceText}>
        &#8377;
      </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default RuppeeIcon;
