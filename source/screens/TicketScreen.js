import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TicketScreen = ({ navigation, route }) => {
  const data = route.params.data;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </Pressable>
      </View>
      <View>
        <View>
          <Text>hello</Text>
        </View>
        <Text>{data.departureCity}</Text>
        <Text>{data.arrivalCity}</Text>
      </View>
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
});
