import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
    const weight = (dia * dia * len * 0.006165).toFixed(2);
    setResult(`${weight} Kg`);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Steel Weight Calculator</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Length (in meters)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
          placeholder="Enter Length"
        />

        <Text style={styles.label}>Diameter (in mm)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={diameter}
          onChangeText={setDiameter}
          placeholder="Enter Diameter"
        />

        <TouchableOpacity onPress={calculateWeight} style={styles.button}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        <Text style={styles.result}>Weight: {result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F5F8',
    paddingHorizontal: 16,
    paddingTop: 20,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,       
    borderColor: 'black', 
  },
  label: {
    fontWeight: '500',
    color: '#555',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#34495E',
    textAlign: 'center',
  },
});

