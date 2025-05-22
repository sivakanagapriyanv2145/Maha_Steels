import { View, Text, ScrollView, Linking, StyleSheet } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CustomTabBar from './components/CustomTabBar';
import Feather from '@expo/vector-icons/Feather';

export default function GetQuotation() {
  const [quotations, setQuotations] = useState([]);

  useEffect(() => {
    axios.get("http://10.1.74.238:4000/mahalakshmisteels/getquote")
      .then(response => {
        const sortedQuotations = response.data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sorting by date in descending order
        setQuotations(sortedQuotations);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Client Quotations</Text>
        {quotations.length > 0 ? (
          quotations.map((quote, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.name}>{quote.name}</Text>
                <Text style={styles.date}>{quote.date.slice(0, 10)}</Text>
              </View>

              <View style={styles.row}>
                <Feather name="phone-call" size={16} color="#1E88E5" />
                <Text onPress={() => Linking.openURL(`tel:${quote.mobile}`)} style={styles.phone}>
                  {quote.mobile}
                </Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.label}>Project Type:</Text>
                <Text style={styles.value}>{quote.projectType}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Steel Type:</Text>
                <Text style={styles.value}>{quote.materials}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Quantity:</Text>
                <Text style={styles.value}>{quote.quantity}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.label}>Location:</Text>
                <Text style={styles.value}>{quote.location}</Text>
              </View>
              {quote.notes?.trim().length > 0 && (
                <View style={styles.infoBox}>
                  <Text style={styles.label}>Notes:</Text>
                  <Text style={styles.value}>{quote.notes}</Text>
                </View>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.noData}>No quotations available.</Text>
        )}
      </ScrollView>

      <View style={styles.tabBar}>
        <CustomTabBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F5F8',
  },
  scrollContainer: {
    paddingBottom: 100,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
  },
  date: {
    fontSize: 12,
    color: '#7F8C8D',
    backgroundColor: '#ECF0F1',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  phone: {
    fontSize: 15,
    color: '#1E88E5',
    marginLeft: 8,
    textDecorationLine: 'underline',
  },
  infoBox: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontWeight: '500',
    color: '#555',
    width: 100,
  },
  value: {
    color: '#333',
    flex: 1,
    fontWeight: '400',
  },
  noData: {
    textAlign: 'center',
    marginTop: 30,
    color: '#888',
    fontSize: 16,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  
});
