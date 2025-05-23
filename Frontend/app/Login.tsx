import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import MS from '../assets/images/MS.jpg';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [flag, setFlag] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://192.168.109.140:4000/mahalakshmisteels/auth/login", {
        email,
        password
      });

      console.log(response);
      router.push("/(tabs)");
    } catch (error) {
      console.log(error);
      setFlag(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={MS} style={{ width: 150, height: 150, marginBottom: 20 }} />
      <Text style={{ fontSize: 20 }}>Login Here</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={flag}
        mode="outlined"
        style={styles.input}
        right={<TextInput.Icon icon="email" />}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        mode="outlined"
        style={styles.input}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{ color: '#fff' }}>Login</Text>
      </TouchableOpacity>

      {flag && <Text style={{ color: 'red', marginTop: 10 }}>Invalid Credentials</Text>}
      <Text onPress={() => router.push('/Signup')}>New User? Signup</Text>
      <Text onPress={() => router.push("/Admin")} style={{ marginTop: 20 }}>Admin User?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: 'center',
    alignItems: 'center',  
    padding: 20,
  },
  input: {
    width: '80%',
    marginTop: 20,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: 'gray',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  }
});
