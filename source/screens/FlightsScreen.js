import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const FlightsScreen = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      airlineDeparture: 'Air France',
      airlineReturn: 'KLM',
      originDate: '21 Aug 2022',
      returnDate: '23 Aug 2022',
      departureTimeOrigin: '12:15',
      arrivalTimeOrigin: '14:20',
      departureTimeReturn: '19:15',
      arrivalTimeReturn: '21:30',
      originAirport: 'BUD',
      returnAirport: 'AMS',
      price: 1225,
    },
    {
      id: 2,
      airlineDeparture: 'Air France',
      airlineReturn: 'KLM',
      originDate: '21 Aug 2022',
      returnDate: '23 Aug 2022',
      departureTimeOrigin: '12:15',
      arrivalTimeOrigin: '14:20',
      departureTimeReturn: '19:15',
      arrivalTimeReturn: '21:30',
      originAirport: 'BUD',
      returnAirport: 'AMS',
      price: 1225,
    },
    {
      id: 3,
      airlineDeparture: 'Air France',
      airlineReturn: '',
      originDate: '21 Aug 2022',
      returnDate: '23 Aug 2022',
      departureTimeOrigin: '12:15',
      arrivalTimeOrigin: '14:20',
      departureTimeReturn: '19:15',
      arrivalTimeReturn: '21:30',
      originAirport: 'BUD',
      returnAirport: 'AMS',
      price: 1225,
    },
    {
      id: 4,
      airlineDeparture: 'Air France',
      airlineReturn: 'KLM',
      originDate: '21 Aug 2022',
      returnDate: '23 Aug 2022',
      departureTimeOrigin: '12:15',
      arrivalTimeOrigin: '14:20',
      departureTimeReturn: '19:15',
      arrivalTimeReturn: '21:30',
      originAirport: 'BUD',
      returnAirport: 'AMS',
      price: 1225,
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text>
          {item.airlineDeparture}{' '}
          {item.airlineReturn && `- ${item.airlineReturn}`}
        </Text>
        <View style={styles.flightDetailsContainer}>
          <View style={styles.flightRow}>
            <View style={[styles.alignRight, styles.flightBox]}>
              <Text style={styles.timeText}>{item.departureTimeOrigin}</Text>
              <Text style={styles.airportText}>{item.originAirport}</Text>
            </View>
            <View style={styles.lineWrapper}>
              <Text style={styles.duration}>20h 20</Text>
              <View style={styles.line} />
              <Text style={styles.stops}>No stops</Text>
            </View>
            <View style={[styles.alignLeft, styles.flightBox]}>
              <Text style={styles.timeText}>{item.departureTimeReturn}</Text>
              <Text style={styles.airportText}>{item.returnAirport}</Text>
            </View>
          </View>
          <View style={styles.flightRow}>
            <View style={[styles.alignRight, styles.flightBox]}>
              <Text style={styles.timeText}>{item.departureTimeOrigin}</Text>
              <Text style={styles.airportText}>{item.originAirport}</Text>
            </View>
            <View style={styles.lineWrapper}>
              <Text style={styles.duration}>7h</Text>
              <View style={styles.line} />
              <Text style={styles.stops}>No stops</Text>
            </View>
            <View style={[styles.alignLeft, styles.flightBox]}>
              <Text style={styles.timeText}>{item.departureTimeReturn}</Text>
              <Text style={styles.airportText}>{item.returnAirport}</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.purchaseContainer}>
          <View style={styles.alignRight}>
            <Text>Price</Text>
            <Text>${item.price}</Text>
          </View>
          <Pressable style={styles.purchaseBtn}>
            <Text>Purchase</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container} />
      <FlatList
        contentContainerStyle={styles.flatList}
        renderItem={renderItem}
        data={DATA}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    marginHorizontal: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 20,
  },
  flightDetailsContainer: {
    paddingTop: 10,
  },
  flightRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  lineWrapper: {
    flex: 3,
  },
  duration: {
    textAlign: 'center',
  },
  line: {
    height: 1,
    backgroundColor: '#999',
    marginVertical: 5,
  },
  stops: {
    textAlign: 'center',
    color: 'green',
  },
  flightBox: {
    flex: 1,
    marginHorizontal: 20,
  },
  alignLeft: {
    alignItems: 'flex-start',
  },
  timeText: {
    fontWeight: '500',
    fontSize: 18,
  },
  airportText: {
    color: '#999',
    fontSize: 16,
    marginTop: 5,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  divider: {
    marginVertical: 15,
    height: 1,
    backgroundColor: '#ccc',
    flex: 1,
  },
  purchaseContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  purchaseBtn: {
    borderRadius: 10,
    backgroundColor: 'lightblue',
    padding: 12,
    marginLeft: 15,
  },
});
