import { View, Text, Linking, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import axios from 'axios';

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

  const today = new Date();

  // Filter out expired items
  const filteredScraps = scraps.filter(item => {
    if (!item.date) return true; // keep if no date
    const scrapDate = new Date(item.date);
    return scrapDate >= today.setHours(0, 0, 0, 0); // keep if today or future
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 12 }}>
      {filteredScraps.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "white",
            marginTop: 16,
            padding: 25,
            borderRadius: 8,
            elevation: 5,
            shadowColor: 'blue',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 1,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '600' }}>{item.name || "No Name"}</Text>
            <Feather
              name="phone-call"
              size={22}
              color="black"
              onPress={() => Linking.openURL(`tel:${item.mobile}`)}
            />
          </View>

          <Text style={{ marginTop: 6 }}>
            <Text style={{ fontWeight: 'bold' }}>Location: </Text>{item.location}
          </Text>

          <Text style={{ marginTop: 4 }}>
            <Text style={{ fontWeight: 'bold' }}>Description: </Text>{item.description}
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
  );
}
