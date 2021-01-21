import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {  useNavigation  } from '@react-navigation/native';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;



const Product = () => {
    const navigation = useNavigation();

     const redirectRouter =  () =>  {
        navigation.navigate('envio');
    }
    return (
        <View style={styles.container}>
            <View style={styles.sectionOne}>
                <Image source={require('../../assets/home/zerocar-removebg-preview.png')} resizeMode="contain" />
            </View>
            <View style={styles.sectionTwo}>
                <View style={styles.footerTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 5.4) / 100 }}>Proteina ISOPURE ZERO CARB</Text>
                </View>

                <View style={styles.description}>
                    <Text style={{ fontSize: (windowWidth * 4) / 100, color: "#B3B3B3" }}>Isopure, Zero Carb, Protein Powder, Strawberries & Cream, 3 lb (1.36 kg)</Text>
                </View>
                <View style={styles.description}>
                    <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 6) / 100 }}>$1150</Text>
                </View>
                <View style={styles.description}>
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingLeft: 10,  fontWeight: "bold"}}
                        onChangeText={text => onChangeText(text)}
                        placeholder="Seleccione cantidad"
                        textAlign="left"
                    />
                </View>
                <TouchableOpacity style={ [styles.description,{   alignItems: "flex-end"  }]  }  onPress={ redirectRouter }>
                   <View style={styles.circle}>
                  <FontAwesome name="chevron-right" size={30} style={{  color: 'white'  }}  />
                     
                   </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between"
    },

    sectionOne: {
        backgroundColor: "#D0EBC1",
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center"


    },
    sectionTwo: {
        backgroundColor: "white",
        width: "100%",
        height: "50%",
        borderTopLeftRadius: 80,
        alignItems: "center",
        justifyContent: "space-around"

    },
    curveTop: {
        height: 80,
        width: "100%",
        backgroundColor: "red"
    },
    curveBottom: {
        height: 80,
        width: "100%",
        backgroundColor: "black",

    },
    footerTitle: {
        width: "80%",

    },

    description: {
        width: "80%",

    },

    circle: {
        width: 70,
        height: 70,
        borderRadius: (   70 / 2 ),
        backgroundColor: "#C0F2A5",
        alignItems: "center",
        justifyContent: "center"
    }

})
