import { View, TouchableOpacity, Text, Dimensions } from "react-native";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function CustomLabBar() {
  const router = useRouter();
 

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        height: 60,
        alignItems: "center",
        justifyContent: "space-around",
        borderTopWidth: 2,
        borderTopColor: "#ccc",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
        position: "absolute",
        bottom: 0,
        
        
        paddingRight:20,
      
        width:"100%" 
      }}
    >
      <TouchableOpacity onPress={()=>router.push('/getQuotation')}  style={{ alignItems: "center", flex: 1 }}>
     <FontAwesome5 name="newspaper" size={24} color="black" />
        <Text>Quotations</Text>
        
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>router.replace('/getSell')} style={{ alignItems: "center", flex: 1 }}><MaterialIcons name="sell" size={24} color="black" />
      <Text>Sell</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>router.push('/postScrap')} style={{ alignItems: "center", flex: 1 }}><FontAwesome5 name="drum-steelpan" size={24} color="black" />
      <Text>Scrap</Text></TouchableOpacity>
       <TouchableOpacity onPress={()=>router.push('/ListScrap')} style={{ alignItems: "center", flex: 1 }}><FontAwesome5 name="drum-steelpan" size={24} color="black" />
      <Text>Scrap List</Text></TouchableOpacity>


     
    </View>
  );
}
