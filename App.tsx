import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';

const App = (): JSX.Element => {
  const { error, loading, weather } = useGetWeather();

  if (weather != null && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error != null ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
});

export default App;