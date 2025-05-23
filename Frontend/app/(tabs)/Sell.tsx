import React, { useState, useRef } from "react";
import { View, ScrollView, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";

export default function Sell() {
  const phoneInput = useRef(null);
  const [key, setKey] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
 
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    try {
      
      const response = await axios.post(
        "http://10.1.74.238:4000/mahalakshmisteels/sell/post",
        {
          name: name,
          mobile: phoneNumber,
          quantity: quantity,
          location: location,
         
        }
      );
      setName("");
      setPhoneNumber("");
      
      setQuantity("");
      setLocation("");
     
      setKey((prev) => prev + 1);
      Alert.alert("Sell Sent", "We will contact you soon 👍");
      console.log("Superb", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: 20,
            borderRadius: 20,
            borderBlockColor: "gray",
            borderWidth: 2,
          }}
        >
          <TextInput
            label="Name"
            mode="outlined"
            value={name}
            onChangeText={(text) => setName(text)}
            style={{ marginBottom: 20, backgroundColor: "white" }}
          />

          <PhoneInput
            ref={phoneInput}
            key={key}
            defaultCode="IN"
            layout="second"
            value={phoneNumber}
            onChangeFormattedText={(text) => setPhoneNumber(text)}
            withShadow
            containerStyle={{
              borderRadius: 5,
              width: "100%",
              height: 60,
              borderColor: "gray",
              borderWidth: 1,
              overflow: "hidden",
            }}
            textContainerStyle={{
              backgroundColor: "white",
              paddingVertical: 0,
              paddingHorizontal: 0,
              borderRadius: 5,
              height: 60,
            }}
            textInputStyle={{
              height: 50,
              backgroundColor: "white",
              fontSize: 16,
              paddingVertical: 0,
            }}
          />

        
         
          <TextInput
            style={{ marginTop: 20, backgroundColor: "white" }}
            mode="outlined"
            onChangeText={(text) => setQuantity(text)}
            value={quantity}
            label="Quantity (Mention with Required Unit)"
          />
          <TextInput
            style={{ marginTop: 20, backgroundColor: "white" }}
            mode="outlined"
            onChangeText={(text) => setLocation(text)}
            value={location}
            label="Location"
          />
          
          <Button
            style={{ marginTop: 40, borderRadius: 10, backgroundColor: "gray" }}
            mode="contained"
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
