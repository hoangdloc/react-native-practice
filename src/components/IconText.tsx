import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import { type TextStyle } from 'react-native';

interface IconTextProps {
  iconName: string;
  iconColor: string;
  bodyText: React.ReactNode;
  bodyTextStyles: TextStyle;
}

const IconText = (props: IconTextProps): JSX.Element => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  const { container, textTheme } = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  textTheme: {
    fontWeight: 'bold'
  }
});

export default IconText;
