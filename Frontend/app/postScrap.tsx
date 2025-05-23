import React, { useState, useRef } from "react";
import { View, ScrollView, Alert, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import CustomTabBar from "./components/CustomTabBar";
import axios from "axios";

export default function Quotation() {
  const phoneInput = useRef(null);
  const [key, setKey] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://192.168.109.140:4000/mahalakshmisteels/scrap/scrap",
        {
          name,
          mobile: phoneNumber,
          location,
          description,
        }
      );
      setName("");
      setPhoneNumber("");
      setLocation("");
      setDescription("");
      setKey((prev) => prev + 1);
      Alert.alert("Scrap Location and details sent");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.card}>
          <TextInput
            label="Name"
            mode="outlined"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <PhoneInput
            ref={phoneInput}
            key={key}
            defaultCode="IN"
            layout="second"
            value={phoneNumber}
            onChangeFormattedText={setPhoneNumber}
            withShadow
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.phoneTextContainer}
            textInputStyle={styles.phoneTextInput}
          />

          <TextInput
            mode="outlined"
            onChangeText={setLocation}
            value={location}
            label="Location"
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            onChangeText={setDescription}
            value={description}
            label="Description"
            style={[styles.input, { height: 70 }]}
          />

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.button}
          >
            Submit
          </Button>
        </View>
      </ScrollView>

    
      <CustomTabBar style={styles.tabBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "gray",
    margin: 20,
  },
  input: {
    marginTop: 20,
    backgroundColor: "white",
  },
  phoneContainer: {
    borderRadius: 5,
    width: "100%",
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    overflow: "hidden",
    marginTop: 20,
  },
  phoneTextContainer: {
    backgroundColor: "white",
    height: 60,
  },
  phoneTextInput: {
    height: 50,
    fontSize: 16,
  },
  button: {
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
