import React  from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TextInput  } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { FontAwesome } from '@expo/vector-icons';



export default function Index(){
    return (
        <View>
            <View style={{ width: '100%', height: (  windowHeight * 50 )/100,   }}>
                 <Image   source={  require('../../assets/login/loginbg.png')  }  style={{ height:  (  windowHeight * 50 )/100, width: ( windowWidth), borderBottomRightRadius: 10    }}  resizeMode="cover"/>
            </View>
            <View style={ styles.footer }>
                <View style={ styles.action  }>
                  <Text style={{ fontSize: ( windowWidth * 6 )/100, fontWeight: "bold" }}>¡Hola de nuevo!</Text>
                  <TextInput  style={{  width: "100%", height: 50, borderColor: "#E2E2E2", borderWidth: 1, borderRadius: 20, textAlign: "center", color: "#E2E2E2", fontWeight: "bold"   }} placeholder="Numero de cliente"  />
                  <TextInput  style={{  width: "100%", height: 50, borderColor: "#E2E2E2", borderWidth: 1, borderRadius: 20, textAlign: "center", color: "#E2E2E2", fontWeight: "bold"   }} placeholder="Contraseña"  />  
                  </View>
                  <View style={styles.visit}>
                  <Text>Ingresar como visitante</Text>
                  <View style={styles.rouded}>
                  <FontAwesome name="chevron-right" size={30} style={{  color: 'white'  }}  />
                  </View>
              </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'white',
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
       marginTop: 20,
       backgroundColor: "white",
       width: "80%",
       height: ( windowHeight * 30 )/100,
       flexDirection: "column",
       justifyContent: "space-around"
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