import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { WideButton } from '../components/WideButton';

export const HomeScreen = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      bookingNumber: 'WE4D1Y',
      airportDepAbv: 'AMS',
      airportArrAbv: 'BUD',
      departureCity: 'Amsterdam',
      arrivalCity: 'Budapest',
      departureTime: '17:10',
      arrivalTime: '19:15',
      departureDate: '20 July, 2022',
      arrivalDate: '23 August, 2022',
      gate: 'A12',
      seat: '14B',
      class: 'Economy',
      passengerName: 'Mate Nagy',
    },
    {
      id: 2,
      bookingNumber: 'WE4D1Y',
      airportDepAbv: 'AMS',
      airportArrAbv: 'BUD',
      departureCity: 'Amsterdam',
      arrivalCity: 'Budapest',
      departureTime: '17:10',
      arrivalTime: '19:15',
      departureDate: '20 July, 2022',
      arrivalDate: '23 August, 2022',
      gate: 'A12',
      seat: '14B',
      class: 'Economy',
      passengerName: 'Mate Nagy',
    },
    {
      id: 3,
      bookingNumber: 'WE4D1Y',
      airportDepAbv: 'AMS',
      airportArrAbv: 'BUD',
      departureCity: 'Amsterdam',
      arrivalCity: 'Budapest',
      departureTime: '17:10',
      arrivalTime: '19:15',
      departureDate: '20 July, 2022',
      arrivalDate: '23 August, 2022',
      gate: 'A12',
      seat: '14B',
      class: 'Economy',
      passengerName: 'Mate Nagy',
    },
    {
      id: 4,
      bookingNumber: 'WE4D1Y',
      airportDepAbv: 'AMS',
      airportArrAbv: 'BUD',
      departureCity: 'Amsterdam',
      arrivalCity: 'Budapest',
      departureTime: '17:10',
      arrivalTime: '19:15',
      departureDate: '20 July, 2022',
      arrivalDate: '23 August, 2022',
      gate: 'A12',
      seat: '14B',
      class: 'Economy',
      passengerName: 'Mate Nagy',
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.ticketContainer}
        onPress={() => navigation.navigate('TicketScreen', { data: item })}>
        <>
          <View style={[styles.dateContainer, styles.flexRow]}>
            <View style={styles.dateTextBox}>
              <Text style={styles.dateText}>{item.departureDate}</Text>
            </View>
            <View style={styles.dateTextBox}>
              <Text style={styles.dateText}>{item.arrivalDate}</Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={[styles.flexRow, styles.timeContainer]}>
              <Text>{item.departureTime}</Text>
              <Text>Duration: 1:30</Text>
              <Text>{item.arrivalTime}</Text>
            </View>
            <View style={[styles.flexRow, styles.placesContainer]}>
              <View style={[styles.airportWrapper, styles.alignLeft]}>
                <Text style={styles.airportText}>{item.airportDepAbv}</Text>
                <Text style={styles.cityText}>{item.departureCity}</Text>
              </View>
              <View style={styles.logoContainer}>
                <View style={styles.line} />
                <View style={styles.logoWrapper} />
              </View>
              <View style={[styles.airportWrapper, styles.alignRight]}>
                <Text style={styles.airportText}>{item.airportArrAbv}</Text>
                <Text style={styles.cityText}>{item.arrivalCity}</Text>
              </View>
            </View>
          </View>
        </>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Let's book your flight!</Text>
        </View>
        <View style={styles.offset}>
          <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>From</Text>
              <TextInput style={styles.searchTextInput} placeholder="" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>To</Text>
              <TextInput style={styles.searchTextInput} placeholder="" />
            </View>
            <View style={styles.flexRow}>
              <View
                style={[
                  styles.inputContainer,
                  styles.flex1,
                  styles.marginRight,
                ]}>
                <Text style={styles.inputLabel}>Departure</Text>
                <TextInput style={styles.searchTextInput} placeholder="" />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  styles.flex1,
                  styles.marginLeft,
                ]}>
                <Text style={styles.inputLabel}>Return</Text>
                <TextInput style={styles.searchTextInput} placeholder="" />
              </View>
            </View>
            <WideButton
              containerStyles={styles.searchButton}
              text={'Search'}
              onPress={() => navigation.navigate('Flights')}
            />
          </View>
          <View style={[styles.upcomingWrapper, styles.flexRow]}>
            <Text style={styles.upcomingHeader}>Upcoming Flights</Text>
            <Pressable>
              <Text style={styles.seeAllText}>See all</Text>
            </Pressable>
          </View>
          <FlatList
            scrollEnabled={false}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    backgroundColor: '#54C0F1',
    height: 250,
    paddingTop: 20,
    paddingLeft: 16,
  },
  headerText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  offset: {
    top: -150,
  },
  searchContainer: {
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 20,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  inputContainer: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },
  inputLabel: {
    color: '#707070',
    fontSize: 14,
  },
  searchTextInput: {
    marginTop: 8,
    fontSize: 18,
    color: '#000',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  marginRight: {
    marginRight: 5,
  },
  marginLeft: {
    marginLeft: 5,
  },
  searchButton: {
    marginTop: 0,
  },
  upcomingWrapper: {
    marginHorizontal: 16,
    marginBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  upcomingHeader: {
    fontSize: 24,
    color: '#000',
  },
  seeAllText: {
    color: '#54C0F1',
    fontSize: 16,
  },
  ticketContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  dateContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  dateTextBox: {
    backgroundColor: 'lightblue',
    borderRadius: 12,
    padding: 8,
  },
  dateText: {
    color: 'blue',
    fontSize: 12,
  },
  detailsContainer: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    //borderStyle: 'dashed',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  timeContainer: {
    justifyContent: 'space-between',
  },
  placesContainer: {
    marginTop: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  airportWrapper: {
    flex: 1,
  },
  alignLeft: {
    alignItems: 'flex-start',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  airportText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  cityText: {
    fontSize: 16,
    color: '#444',
  },
  logoContainer: {
    flex: 1,
  },
  line: {
    marginVertical: 30,
    height: 1,
    backgroundColor: '#CCC',
  },
  logoWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -15,
    marginTop: -15,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#eee',
  },
});
