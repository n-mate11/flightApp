import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const WideButton = ({
  onPress,
  containerStyles,
  textStyles,
  text,
  icon,
}) => {
  return (
    <TouchableOpacity style={[styles.btn, containerStyles]} onPress={onPress}>
      <>{icon}</>
      <Text style={[styles.text, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#0077b6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
