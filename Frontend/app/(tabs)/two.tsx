import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function SteelCalculator() {
  const [length, setLength] = useState('');
  const [diameter, setDiameter] = useState('');
  const [result, setResult] = useState('');

  const calculateWeight = () => {
    const len = parseFloat(length);
    const dia = parseFloat(diameter);
    if (!len || !dia) {
      setResult('Enter valid values');
      return;
    }
    const weight = (dia * dia * len * 0.006165).toFixed(2); // Example formula
    setResult(`${weight} Kg`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F4F7', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Steel Weight Calculator</Text>

      <Text style={{ fontSize: 16 }}>Length (in meters)</Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 10,
          marginTop: 5,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: '#ccc'
        }}
        keyboardType="numeric"
        value={length}
        onChangeText={setLength}
        placeholder="Enter Length"
      />

      <Text style={{ fontSize: 16 }}>Diameter (in mm)</Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 10,
          marginTop: 5,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: '#ccc'
        }}
        keyboardType="numeric"
        value={diameter}
        onChangeText={setDiameter}
        placeholder="Enter Diameter"
      />

      <TouchableOpacity
        onPress={calculateWeight}
        style={{
          backgroundColor: '#2196F3',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Calculate</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 18, marginTop: 20, fontWeight: 'bold' }}>Weight: {result}</Text>
    </View>
  );
}
