import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import MS from "../assets/images/MS.jpg";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-paper";
import axios from "axios";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Password toggle state

  const handlesubmit = async () => {
    try {
      const response = await axios.post(
        "http://192.168.109.140:4000/mahalakshmisteels/auth/signup",
        {
          username: username.trim(),
          email: email.trim(),
          password: password.trim(),
        }
      );

      console.log(response);
      router.push("/Login");
    } catch (error) {
      console.log(error);
      setFlag(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={MS}
        style={{ width: 150, height: 150, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 20 }}>Signup Here</Text>

      <TextInput
        onChangeText={(e) => setUsername(e)}
        style={styles.input}
        label="Username"
        value={username}
        error={flag}
        mode="outlined"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
      />

      <TextInput
        onChangeText={(e) => setEmail(e)}
        style={styles.input}
        label="Email"
        value={email}
        error={flag}
        mode="outlined"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        right={<TextInput.Icon icon="email" />}
      />

      <TextInput
        onChangeText={(e) => setPassword(e)}
        style={styles.input}
        label="Password"
        value={password}
        error={flag}
        secureTextEntry={!showPassword}
        mode="outlined"
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      {flag && (
        <Text style={{ color: "red", marginTop: 10 }}>
          Invalid Credentials
        </Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handlesubmit}
      >
        <Text style={{ color: "#fff" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    marginTop: 20,
  },
  button: {
    backgroundColor: "gray",
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
});
