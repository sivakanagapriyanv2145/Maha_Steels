import { View, Text, Linking, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import axios from 'axios';
import CustomTabBar from './components/CustomTabBar';

export default function Scrap() {
  const [scraps, setScraps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScrapData = async () => {
      try {
        const response = await axios.get("http://192.168.109.140:4000/mahalakshmisteels/scrap/getscrap");
        setScraps(response.data);
      } catch (error) {
        console.error("Error fetching scrap data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScrapData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {scraps.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>{item.name || "No Name"}</Text>
              <Feather
                name="phone-call"
                size={22}
                color="black"
                onPress={() => Linking.openURL(`tel:${item.mobile}`)}
              />
            </View>
            <Text style={styles.text}>
              <Text style={styles.bold}>Location: </Text>{item.location}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.bold}>Description: </Text>{item.description}
            </Text>
            {item.date && (
              <View style={{ alignItems: 'flex-end', marginTop: 6 }}>
                <Text style={{ fontSize: 12, color: 'gray' }}>
                  {new Date(item.date).toLocaleDateString()}
                </Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <CustomTabBar style={styles.tabBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 12,
    paddingBottom: 80,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: "white",
    marginTop: 16,
    padding: 25,
    borderRadius: 8,
    elevation: 5,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
  },
  text: {
    marginTop: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
