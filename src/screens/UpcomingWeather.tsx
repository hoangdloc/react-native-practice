import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native';
import ListItem from '../components/ListItem';
import type { IWeatherList } from '../interfaces/weather';

interface UpcomingWeatherProps {
  weatherData: IWeatherList[];
}

const UpcomingWeather: React.FC<UpcomingWeatherProps> = ({ weatherData }) => {
  const renderItem = ({ item }: { item: IWeatherList }): JSX.Element => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight ?? 0,
    backgroundColor: 'cornflowerblue'
  },
  image: {
    flex: 1
  }
});

export default UpcomingWeather;
