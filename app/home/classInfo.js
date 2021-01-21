import React  from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity  } from 'react-native';
import {  useNavigation  } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { FontAwesome } from '@expo/vector-icons';



export default function ClassInfo(){
    

    const navigation = useNavigation();

     const redirectRouter =  () =>  {
        
        navigation.navigate('asientoScreen');
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: (  windowHeight * 50 )/100, backgroundColor: "#D0EBC1"  }}>
                 <Image   source={  require('../../assets/home/liz2.png')  }  style={{ height:  (  windowHeight * 50 )/100, width: ( windowWidth), borderBottomRightRadius: 10    }}  resizeMode="contain"/>
            </View>
            <View style={ styles.footer }>
                <View style={ styles.action  }>
                  <Text style={{ fontSize: ( windowWidth * 6 )/100, fontWeight: "bold",right: 60 }}>Hoy 5:30 PM</Text>
                   <View style={{ width: "90%",   height: "45%", flexDirection:"column", borderRadius: 15, alignItems: "center", justifyContent: "center",}}>
                        <View style={{  width: "90%"}}>
                            <Text style={{ fontSize: ( windowWidth *5.4)/100}}>Liz</Text>
                            <Text style={{ fontSize: ( windowWidth *5)/100}}>45 Min</Text>
                        </View>
                   </View>
                   
                   <Text style={{ fontSize: ( windowWidth * 5.5 )/100, fontWeight: "bold",right: 40 }}>Elige tu bicicleta</Text>
                    <TouchableOpacity onPress={redirectRouter}>
                    <Text style={{  fontSize: ( windowWidth * 5.5 )/100, fontWeight: "bold",right: 55, marginTop: 15, color: "#B3B3B3" }} >Bicicleta A-5</Text>
                    </TouchableOpacity>
                   <View  style={{  height: 1, width:"80%", backgroundColor: "#B3B3B3"  }}  />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'white',
       marginTop: 20
   },
   footer: {
      backgroundColor: 'white',
      width: ( windowWidth),
      height: ( windowHeight * 50)/100,
      borderTopLeftRadius:60,
      top: -45,
      flexDirection: 'column',
      alignItems: "center",

   },

   action: {
       
       marginTop: 10,
       width: "80%",
       height: ( windowHeight * 30 )/100,
       flexDirection: "column",
       justifyContent: "space-around",
       alignItems: "center",
   },
   visit: {
       width: "100%",
       marginTop: 70,
       flexDirection: "row",
       justifyContent: "space-around",
       alignItems: "center"
   },
   rouded: {
       width: 70,
       height: 70,
       borderRadius: 70/2,
       backgroundColor: "black",
       alignItems: "center",
       flexDirection: "row",
       justifyContent: "center"
   }
})