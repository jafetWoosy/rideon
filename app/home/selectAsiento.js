import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const sectionOne = [1, 2, 3, 4];
const sectionTwo = [1, 2, 3, 4, 5];
const sectionThree = [1, 2, 3, 4, 5, 6]




export default function SelectAsiento() {

    return (
        <View style={styles.container}>
            <View style={styles.cabezera}>
                <TouchableOpacity style={styles.avatarCoach}>
                   <Image  source={ require('../../assets/home/liz.png')  }   resizeMode="contain"
                        />
                </TouchableOpacity>
                <View style={styles.containerAsientos}>
                    <View style={styles.seccionOne}>
                        {
                            sectionOne.map(ele => {
                                return (
                                    <View style={styles.asiento}  >
                                        <Text style={styles.textAsinto}>{ele}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                    <View style={styles.seccionTwo}>
                        {
                            sectionTwo.map(ele => {
                                return (
                                    <View style={styles.asiento}  >
                                        <Text style={styles.textAsinto}>{ele}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                    <View style={styles.seccionThree}>
                        {
                            sectionThree.map(ele => {
                                return (
                                    <View style={styles.asiento}  >
                                        <Text style={styles.textAsinto}>{ele}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.title}>
                    <Text style={styles.TextTitle}>Hoy 5:30 pm</Text>
                </View>
                <View style={styles.body}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 20 }}>Liz</Text>
                        <Text style={{ fontSize: 17 }}>45min</Text>
                    </View>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Bicicleta seleccionada</Text>
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#B3B3B3" }}>Bicicleta A-5</Text>
                    <View style={{ width: "100%", backgroundColor: "#B3B3B3", height: 1 }} />
                </View>
                <View style={{   width: "80%", height: 70, alignItems: "flex-end", justifyContent: "flex-end"   }}>
                      <View style={styles.OK}>
                          <Text style={{  color: "white", fontWeight: "bold", fontSize: 20   }} >OK!</Text>
                      </View> 
                </View>
            </View>
        </View>
    )
}










const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        marginTop: 15
    },
    cabezera: {
        width: windowWidth,
        height: (windowHeight * 40) / 100,

        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: 20
    },

    footer: {

        marginTop: 10,
        width: "100%",
        height: (windowHeight * 50) / 100,
        borderTopLeftRadius: 70,
        alignItems: 'center',
        justifyContent: "space-around",


    },

    avatarCoach: {

        
        width: 70,
        height: 70,
        borderRadius: (70 / 2),
        alignItems: "center",
        justifyContent: "center"
    },

    containerAsientos: {

        width: (windowWidth),
        height: (windowHeight * 25) / 100,

        alignItems: "center",


    },

    seccionOne: {
        backgroundColor: "white",
        width: (windowWidth * 50) / 100,
        height: (windowHeight * 8) / 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    seccionTwo: {
        backgroundColor: "white",
        width: (windowWidth * 60) / 100,
        height: (windowHeight * 8) / 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    seccionThree: {
        backgroundColor: "white",
        width: (windowWidth * 80) / 100,
        height: (windowHeight * 8) / 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },

    asiento: {
        backgroundColor: "white",
        width: 40,
        height: 40,
        borderRadius: (40 / 2),
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#BDED9F",
        borderWidth: 3
    },



    textAsinto: {
        color: "#BDED9F",
        fontWeight: "bold"
    },

    title: {
        width: "80%",

    },

    TextTitle: {
        fontSize: (windowWidth * 8) / 100,
        fontWeight: "bold"
    },


    body: {
        backgroundColor: "white",
        width: "80%",
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
        borderRadius: 8

    },

    OK: {
        width: 70,
        height: 70,
        borderRadius: (  70 / 2 ),
        backgroundColor: "#BDED9F",
        alignItems: "center",
        justifyContent: "center"
    }


})
