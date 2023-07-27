import { Text, type TextStyle, View, type ViewStyle } from 'react-native';
import React from 'react';

interface RowTextProps {
  containerStyles: ViewStyle;
  messageOneStyles: TextStyle;
  messageOne: React.ReactNode;
  messageTwoStyles: TextStyle;
  messageTwo: React.ReactNode;
}

const RowText = (props: RowTextProps): JSX.Element => {
  const {
    containerStyles,
    messageOne,
    messageOneStyles,
    messageTwo,
    messageTwoStyles
  } = props;

  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
