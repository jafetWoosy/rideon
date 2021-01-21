import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {  useNavigation  } from '@react-navigation/native';




export default function IndexCalendar() {
    const navigation = useNavigation();

     const redirectRouter =  () =>  {
        navigation.navigate('waiting');
    }
    const arr = [1, 2, 3, 4];
    return (
        <View style={styles.container}>
            <View style={styles.tomorrow}>
                <View style={{ width: "80%", height: "100%" }}>
                    <Text style={{ fontSize: (windowWidth * 8) / 100, fontWeight: "bold" }} >Calendario</Text>
                </View>
            </View>
            <ScrollView>
                {
                    arr.map(elemen => {
                        return (
                            <View style={styles.listClass}>
                                <View style={{ width: "80%" }}>
                                    <Text style={{ fontWeight: "bold" }}>Mañana</Text>
                                </View>
                                <View style={styles.classInfo}>
                                    {
                                        arr.map(ele => {
                                            return (
                                                <TouchableOpacity style={styles.containerClassinfo}  onPress={redirectRouter}>
                                                    <View style={{ width: "90%" }}>
                                                        <Text>06:00 AM</Text>
                                                    </View>
                                                    <View style={styles.containerinfo}>
                                                        <View style={styles.infoAvatar}>
                                                            <Image source={require('../../assets/home/liz.png')} />
                                                        </View>
                                                        <View style={styles.infoclasslist}>
                                                            <Text>Marta</Text>
                                                            <Text>45 min</Text>
                                                            <FontAwesome name="fire" size={13} />
                                                        
                                                        </View>
                                                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                                                            <FontAwesome name="calendar" size={15} />
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                                <View style={styles.separator} />

                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tomorrow: {
        width: "100%", height: 40,
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 40,

    },
    classInfo: {
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "white",
        paddingTop: 5,
        paddingBottom: 5,
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

    containerClassinfo: {
        width: "90%",
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 10,

    },

    containerinfo: {
        flexDirection: "row",
        width: "95%",
        backgroundColor: "white",
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

    infoclasslist: {
        width: "60%",
        marginLeft: 10,

    },

    listClass: {
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 50
    },
    separator: {
        marginTop: 14,
        width: "90%",
        backgroundColor: "#C0F2A5",
        height: "1.3%",
        borderRadius: 5,
    }

})
