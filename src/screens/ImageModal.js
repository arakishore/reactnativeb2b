import React from 'react';
import { Modal, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

const ImageModal = ({ visible, imagePath, onClose }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        <Image style={styles.modalImage} source={{ uri: imagePath }} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default ImageModal;
