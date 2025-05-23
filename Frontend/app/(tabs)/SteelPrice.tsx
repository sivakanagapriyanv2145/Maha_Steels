import { View, Text, ScrollView, StyleSheet } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const steelPrices = [
  {
    productName: 'TMT Bar',
    price: 65000,
    category: 'Construction',
    description: 'High strength deformed bar',
    updatedAt: '2025-05-20',
  },
  {
    productName: 'Mild Steel Plate',
    price: 55000,
    category: 'Fabrication',
    description: 'Hot rolled MS plate',
    updatedAt: '2025-05-19',
  },
  {
    productName: 'Steel Rod',
    price: 62000,
    category: 'Machinery',
    description: 'Precision steel rod for mechanical use',
    updatedAt: '2025-05-18',
  },
   {
    productName: 'Scrap',
    price: 62500,
    category: 'Machinery',
    description: 'Precision steel rod for mechanical use',
    updatedAt: '2025-05-30',
  },
];

export default function SteelPriceList() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Steel Price List</Text>

        {steelPrices.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{item.productName}</Text>
              <Text style={styles.date}>{item.updatedAt}</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.label}>Price:</Text>
              <Text style={styles.value}>₹ {item.price}</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.label}>Category:</Text>
              <Text style={styles.value}>{item.category}</Text>
            </View>

            
          </View>
        ))}
      </ScrollView>

      <View style={styles.tabBar}>
      
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
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
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
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
