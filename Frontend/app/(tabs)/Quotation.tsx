import React, { useState, useRef } from "react";
import { View, ScrollView, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";

export default function Quotation() {
  const phoneInput = useRef(null);
  const [key, setKey] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectSteel, setSelectedSteel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = async () => {
    try {
      
      const response = await axios.post(
        "http://192.168.109.140:4000/mahalakshmisteels/quote",
        {
          name: name,
          mobile: phoneNumber,
          projectType: selectedProject,
          materials: selectSteel,
          quantity: quantity,
          location: location,
          notes: notes,
        }
      );
      setName("");
      setPhoneNumber("");
      setSelectedProject("");
      setSelectedSteel("");
      setQuantity("");
      setLocation("");
      setNotes("");
      setKey((prev) => prev + 1);
      Alert.alert("Quotation Sent", "We will contact you soon 👍");
      console.log("Superb", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  const project = [
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Industrial", value: "industrial" },
    { label: "Infrastructure", value: "infrastructure" },
    { label: "Institutional", value: "institutional" },
  ];
  const steelTypes = [
    { label: "Carbon Steel", value: "carbon" },
    { label: "Alloy Steel", value: "alloy" },
    { label: "Stainless Steel", value: "stainless" },
    { label: "Tool Steel", value: "tool" },
    { label: "Galvanized Steel", value: "galvanized" },
  ];
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

          <Dropdown
            data={project}
            labelField="label"
            valueField="value"
            placeholder="Select Project Type"
            value={selectedProject}
            onChange={(item) => {
              setSelectedProject(item.value);
            }}
            style={{
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              paddingLeft: 10,

              marginTop: 25,
            }}
            containerStyle={{
              width: "100%",
            }}
          />
          <Dropdown
            data={steelTypes}
            labelField="label"
            valueField="value"
            placeholder="Select Steel"
            value={selectSteel}
            onChange={(item) => {
              setSelectedSteel(item.value);
            }}
            style={{
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              paddingLeft: 10,

              marginTop: 25,
            }}
            containerStyle={{
              width: "100%",
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
          <TextInput
            style={{ marginTop: 20, backgroundColor: "white", height: 70 }}
            mode="outlined"
            onChangeText={(text) => setNotes(text)}
            value={notes}
            label="Notes"
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
