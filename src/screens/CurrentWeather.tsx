import React from 'react';

import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';
import type { IWeatherList } from '../interfaces/weather';

interface CurrentWeatherProps {
  weatherData: IWeatherList;
}

const CurrentWeather = ({ weatherData }: CurrentWeatherProps): JSX.Element => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        {
          backgroundColor:
            weatherType[weatherCondition as keyof typeof weatherType]
              .backgroundColor
        }
      ]}>
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition as keyof typeof weatherType].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageOne={`High: ${temp_max}° `}
          messageTwoStyles={highLow}
          messageTwo={`Low: ${temp_min}°`}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageOne={weather[0].description}
        messageTwoStyles={message}
        messageTwo={
          weatherType[weatherCondition as keyof typeof weatherType].message
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    fontSize: 48,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;
