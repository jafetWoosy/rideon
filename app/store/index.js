import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import {  useNavigation  } from '@react-navigation/native';











const arr = [1, 2, 3, 4];

const IndexStore = () => {
    const navigation = useNavigation();

     const redirectRouter =  () =>  {
        
        navigation.navigate('Product');
    }

    return (
        <View style={styles.container}>
            <View style={styles.promotions}>
                <View style={styles.promotionsTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Promociones</Text>
                </View>
                <Image source={require('../../assets/home/117106580_326950355387600_2123101131886637331_o.png')} style={{
                    width: "80%",
                    height: (windowHeight * 25) / 100,
                }} resizeMode="contain" />
            </View>


            <View style={styles.nextClass} >
                <View style={styles.promotionsTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>Paquetes</Text>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={styles.ScrollHorizontal} showsHorizontalScrollIndicator={false} >
                    {
                        arr.map(element => {
                            return (
                                <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                                    <View style={styles.classSingle}>
                                        <View style={styles.infoCLASE}>
                                            <Text style={{ color: "white" }}>1 clase</Text>
                                        </View>
                                    </View>
                                    <Text style={{ fontWeight: "bold" }}>$135</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>


            <View style={styles.nextClass} >
            <View style={styles.promotionsTitle}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Productos</Text>
            </View>
            <ScrollView horizontal={true} contentContainerStyle={styles.ScrollHorizontal} showsHorizontalScrollIndicator={false} >
                {
                    arr.map(element => {
                        return (
                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}onPress={ redirectRouter }>
                            <ImageBackground source={require('../../assets/home/proteina.png')} style={styles.classSingle}
                                resizeMode="contain"
                            >
                                <View style={[styles.infoCLASE,{top: 40   }]} >
                                    <Text style={{ color: "white" }} >Proteina</Text>
                                </View>
                            </ImageBackground>
                            <Text style={{ fontWeight: "bold" }}>Hoy 5:30pm</Text>
                        </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>

        </View>
    )
}

export default IndexStore




const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    promotions: {

        width: "100%",
        height: (windowHeight * 30) / 100,
        alignItems: "center",
        marginTop: 50,
        justifyContent: "space-between"
    },

    promotionsTitle: {
        width: "80%",
        height: 20,

    },

    nextClass: {
        width: "100%",
        height: (windowHeight * 27) / 100,
        alignItems: "center",
        marginTop: 20



    },

    ScrollHorizontal: {

        height: "100%",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-around"
    },

    classSingle: {

        width: (windowWidth * 35) / 100,
        height: "75%",
        backgroundColor: "white",
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
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


    nameTeacher: {
        backgroundColor: "#BEF2A2",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 25,
        borderRadius: 10,
        top: 40
    },

    infoCLASE: {
        backgroundColor: "#373636",
        height: 25,
        width: 80,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    product: {
      
    }

})
