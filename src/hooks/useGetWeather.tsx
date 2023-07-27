import { WEATHER_API_KEY } from '@env';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import type { IWeather } from '../interfaces/weather';

interface IUseGetWeatherHook {
  loading: boolean;
  error: string | null;
  weather: IWeather | null;
}

export const useGetWeather = (): IUseGetWeatherHook => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  const fetchWeatherData = async (): Promise<void> => {
    try {
      if (lat != null && lon != null) {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
      }
    } catch (e) {
      setError('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);

      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return { loading, error, weather };
};
