import { View, Text, Linking, ScrollView } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';

export default function Scrap() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 12 }}>
      
      <View style={{
        backgroundColor: "white",
        marginTop: 16,
        padding: 12,
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, fontWeight: '600' }}>NirSteel</Text>
          <Feather
            name="phone-call"
            size={22}
            color="black"
            onPress={() => Linking.openURL(`tel:7502492263`)}
          />
        </View>
        <Text style={{ marginTop: 6 }}>
          <Text style={{ fontWeight: 'bold' }}>Location: </Text>Chennai
        </Text>
        <Text style={{ marginTop: 4 }}>
          <Text style={{ fontWeight: 'bold' }}>Description: </Text>Old mild steel rods from dismantled building
        </Text>
      </View>

      <View style={{
        backgroundColor: "white",
        marginTop: 16,
        padding: 12,
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'blue',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, fontWeight: '600' }}>Maha Steels</Text>
          <Feather
            name="phone-call"
            size={22}
            color="black"
            onPress={() => Linking.openURL(`tel:7502492263`)}
          />
        </View>
        <Text style={{ marginTop: 6 }}>
          <Text style={{ fontWeight: 'bold' }}>Location: </Text>Madurai
        </Text>
        <Text style={{ marginTop: 4 }}>
          <Text style={{ fontWeight: 'bold' }}>Description: </Text>Steel plates and other fabrication scraps
        </Text>
      </View>

    </ScrollView>
  );
}
