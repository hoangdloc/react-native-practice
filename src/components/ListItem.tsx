import React from 'react';
import moment from 'moment';

import { View, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { weatherType } from './../utilities/weatherType';

interface ListItemProps {
  dt_txt: string;
  min: number;
  max: number;
  condition: string;
}

const ListItem = (props: ListItemProps): JSX.Element => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp } = styles;

  return (
    <View style={item}>
      <Feather
        name={weatherType[condition as keyof typeof weatherType].icon}
        size={50}
        color="white"
      />
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  dateTextWrapper: {
    flexDirection: 'column'
  }
});

export default ListItem;
