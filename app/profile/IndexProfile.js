import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import {  useNavigation  } from '@react-navigation/native';


export default function IndexProfile() {
    const navigation = useNavigation();
    const arr = [1, 2, 3, 4];

    const redirectRouter = () => {
        navigation.navigate('Informacion');
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerWelcome}>
                <View style={styles.headersectionOne}>
                    <Text style={{ marginLeft: 30, fontSize: 25, fontWeight: "bold" }}>Gaby Cantú</Text>
                </View>
                <View style={styles.sectionAvatar}>
                    <View style={styles.avatar}>
                        <Image source={require('../../assets/home/woman.png')} resizeMode="contain" />
                    </View>
                </View>
            </View>
            <View style={styles.containerLevel}>
                <View style={styles.level}>
                    <View style={styles.bodyContainer}>
                        <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 4) / 100, color: "#C0F2A5" }}>Nivel</Text>
                        <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 7) / 100, color: "white" }}>PLATINO</Text>
                        <View style={{ width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 4) / 100, color: "#C0F2A5" }}>55/50</Text>
                        </View>
                    </View>
                    <View style={{ width: "60%", backgroundColor: "black", top: 7, zIndex: 100 }}>
                        <Text style={{ color: "white", fontSize: (windowWidth * 2.5) / 100, }}>SIGUIENTE OBJETIVO</Text>
                    </View>
                    <View style={{ width: "80%", height: "15%", borderRadius: 25, alignItems: "center", justifyContent: "center", borderWidth: 1.5, borderColor: "white" }}>
                        <Text style={{ fontSize: (windowWidth * 2.4) / 100, color: "#C0F2A5" }}>PLATINO II 80 SESIONES</Text>
                    </View>
                </View>
                <View style={styles.sessionContainer}>
                    <View style={{ alignItems: "center", width: "100%", height: "70%", justifyContent: "center" }}>
                        <Text style={{ fontSize: (windowWidth * 3.5) / 100, fontWeight: "bold", marginTop: 40 }}>Sesiones disponibles</Text>
                        <Text style={{ fontSize: (windowWidth * 5) / 100, fontWeight: "bold", marginTop: 15 }}>3 Sesiones</Text>
                    </View>
                    <View style={{ alignItems: "center", width: "100%", height: "30%", justifyContent: "flex-end", }}>
                        <View style={{ backgroundColor: "white", alignItems: "center", justifyContent: "center", borderRadius: 15, height: "50%", width: "80%", top: 13, borderWidth: 1, borderColor: "#C0F2A5", }}>
                            <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 2.8) / 100 }}>Adquirir más sesiones</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.nextClass} >
                <View style={styles.promotionsTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Conoce a tus coaches</Text>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={styles.ScrollHorizontal} showsHorizontalScrollIndicator={false} >
                    {
                        arr.map(element => {
                            return (
                                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }} onPress={redirectRouter}>
                                    <ImageBackground source={require('../../assets/home/fernanda.png')} style={styles.classSingle}
                                        resizeMode="contain"
                                    >
                                        <View style={styles.nameTeacher} >
                                            <Text style={{ color: "white" }} >Liz</Text>
                                        </View>
                                    </ImageBackground>

                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
             <View style={ styles.containerFACT }>
                <View style={{ backgroundColor: "white", top: 8, right: 100, zIndex: 100,   }}>
                   <Text style={{ fontWeight: "bold"  }}>Datos de facturacion</Text>
                </View>
             <View style={styles.facturacion}>
                  <Text style={{  fontSize: ( windowWidth * 6 )/100 }}>**** **** **** 4420</Text>
             </View>
             </View>
        </View>
    )
}


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerWelcome: {
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row",
        height: (windowHeight * 15) / 100,
        alignItems: "center",
        marginTop: 20
    },

    headersectionOne: {
        height: "100%",
        width: "65%",
        alignItems: "flex-start",
        justifyContent: "center",
    },

    sectionAvatar: {
        width: "40%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"


    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: (80 / 2),

    },
    containerLevel: {
        width: "100%",
        height: (windowHeight * 30) / 100,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around"
    },

    level: {
        borderRadius: 15,
        width: "43%",
        height: "100%",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    sessionContainer: {
        borderRadius: 15,
        width: "43%",
        height: "80%",
        backgroundColor: "#C0F2A5"

    },

    bodyContainer: {

        width: "75%",
        height: "40%",
        justifyContent: "space-between"
    },

    coaches: {
        backgroundColor: "red",

    },
    nextClass: {
        width: "100%",
        height: (windowHeight * 27) / 100,
        alignItems: "center",
        marginTop: 10
    },
    nameTeacher: {
        backgroundColor: "#BEF2A2",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 25,
        borderRadius: 10,
        top: 85
    },
    classSingle: {
        width: (windowWidth * 35) / 100,
        height: "75%",
        backgroundColor: "white",
        marginLeft: 10,
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },

    ScrollHorizontal: {

        height: "100%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    promotionsTitle: {
        width: "90%",
        height: 20,

    },
    containerFACT: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: ( windowHeight * 18 )/100,
      
    },
    facturacion: {
        width: "90%",
        height: "80%",
        borderColor: "black",
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 16
    }
})
