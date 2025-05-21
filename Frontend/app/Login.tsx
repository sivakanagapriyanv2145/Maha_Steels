import { StatusBar } from 'expo-status-bar';
import { Platform,StyleSheet,TouchableOpacity,Button,Image } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import MS from '../assets/images/MS.jpg';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';



import axios from 'axios';


export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [flag,setFlag]=useState(false);
    const handlesubmit = async() => {
      try {
        const response = await axios.post("http://10.1.70.237:4000/mahalakshmisteels/auth/login", {
          
          email: email,
          password: password
        });
        
        
        console.log(response);
      
        router.push("/(tabs)");
        
        
      } catch (error) {
        console.log(error);
        setFlag(true);

      }
    }

  return (
    <View style={styles.container}>
     
        <Image source={MS} style={{width:150,height:150,marginBottom:20}}/>
       <Text style={{fontSize:20}}>Login Here</Text>
      <TextInput onChangeText={e=>setEmail(e)} style={styles.input} label="Email" error={flag} underlineColor="transparent"
                activeUnderlineColor="transparent" mode="outlined" />
    
      <TextInput  onChangeText={e=>setPassword(e)} style={styles.input} label="Password" secureTextEntry={true} underlineColor="transparent"
                activeUnderlineColor="transparent" mode="outlined" />
        
      
        <TouchableOpacity  style={{backgroundColor:'gray',width:'80%',height:40,justifyContent:'center',alignItems:'center',borderRadius:5,marginTop:20}} onPress={handlesubmit} >
            <Text   style={{color:'#fff'}}>Login</Text>
        </TouchableOpacity>
        {flag&&<Text style={{color:'red',marginTop:10}}>Invalid Credentials</Text>}
        <Text onPress={()=>router.push('/Signup')}>New User? Signup</Text>
        <Text onPress={() => router.push("/Admin")} style={{marginTop:20}}>Admin User?</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: 'center',
    alignItems: 'center',  
    padding:20,

  },
  input: {
    width: '80%',
    height: 40,

    borderRadius: 5,
    marginTop:20,
    backgroundColor:"white",

    
  },
});
