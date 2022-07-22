import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';
import ScreenBrightness from 'react-native-screen-brightness';

export const TicketScreen = ({ navigation, route }) => {
  const data = route.params.data;
  const [qrCodeValue, setQRCodeValue] = useState(
    'https://github.com/n-mate11/flightApp',
  );

  useEffect(() => {
    ScreenBrightness.setBrightness(1);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </Pressable>
        </View>
        <View style={styles.ticketContainer}>
          <View style={styles.passangerContainer}>
            <View>
              <Text style={styles.passengerName}>{data.passengerName}</Text>
              <Text style={styles.passengerLabel}>Passenger</Text>
            </View>
            <View style={styles.airlineImage}>
              <Image />
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <View style={[styles.flexRow, styles.placesContainer]}>
              <View style={[styles.airportWrapper, styles.alignLeft]}>
                <Text style={styles.airportText}>{data.airportDepAbv}</Text>
                <Text style={styles.cityText}>{data.departureCity}</Text>
              </View>
              <View style={styles.logoContainer}>
                <View style={styles.line} />
                <View style={styles.logoWrapper} />
              </View>
              <View style={[styles.airportWrapper, styles.alignRight]}>
                <Text style={styles.airportText}>{data.airportArrAbv}</Text>
                <Text style={styles.cityText}>{data.arrivalCity}</Text>
              </View>
            </View>
            <View style={[styles.flexRow, styles.dateTimeContainer]}>
              <View style={styles.dateTimeBox}>
                <View style={[styles.airlineImage, { height: 30, width: 30 }]}>
                  <Image />
                </View>
                <Text style={styles.dateTimeLabel}>Date</Text>
                <Text style={styles.infoText}>{data.departureDate}</Text>
              </View>
              <View style={styles.dateTimeBox}>
                <View style={[styles.airlineImage, { height: 30, width: 30 }]}>
                  <Image />
                </View>
                <Text style={styles.dateTimeLabel}>Time</Text>
                <Text style={styles.infoText}>
                  {data.departureTime} - {data.arrivalTime}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.flexRow, styles.infoContainer]}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Gate</Text>
              <Text style={styles.infoText}>{data.gate}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Seat</Text>
              <Text style={styles.infoText}>{data.seat}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Flight Number</Text>
              <Text style={styles.infoText}>placehold.</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Class</Text>
              <Text style={styles.infoText}>{data.class}</Text>
            </View>
          </View>
          <View style={styles.qrCode}>
            <QRCode value={qrCodeValue} size={130} />
          </View>
          <View style={styles.addToWallet}>
            {false && (
              <Text style={styles.addToWalletText}>Download boarding pass</Text>
            )}
            <Text style={styles.addToWalletText}>Add to Wallet</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#54C0F1',
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketContainer: {
    paddingHorizontal: 16,
  },
  passangerContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  passengerName: {
    fontWeight: '500',
    fontSize: 18,
  },
  passengerLabel: {
    color: '#555',
  },
  airlineImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  placesContainer: {
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
  dateTimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  dateTimeBox: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 20,
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 20,
    marginHorizontal: 10,
  },
  dateTimeLabel: {
    marginTop: 15,
    fontWeight: '500',
    color: '#555',
  },
  infoContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 20,
  },
  infoBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTitle: {
    color: '#555',
  },
  infoText: {
    fontWeight: '500',
    fontSize: 16,
  },
  qrCode: {
    marginTop: 20,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToWallet: {
    marginTop: 20,
    backgroundColor: '#444',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToWalletText: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 18,
  },
});
