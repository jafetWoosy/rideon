import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function ListWaiting() {
    const navigation = useNavigation();

    const arr = [1, 2, 3, 4];

   const gotoList = () => {
      navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.x}>
                <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../../assets/xblanco.png')}
                        style={{ width: 20, height: 20, tintColor: "white" }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={{ width: "100%", left: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 6) / 100 }}>¡Estas en la lista!</Text>
            </View>
            <View style={ {  width: "100%", alignItems: "center", justifyContent: "center", marginTop: 50 }  }>
                 <View style={{ width: "70%" }}>
                      <Text style={{  fontWeight: "bold", fontSize: (  windowWidth * 3.5  )/100  }}>Ingresaste a la lista de espera con el puesto numero 4.
                      </Text>
                 </View>
            </View>
            <View style={ {  width: "100%", alignItems: "center", justifyContent: "center",  marginTop: 15 }  }>
                 <View style={{ width: "70%" }}>
                      <Text style={{  fontWeight: "bold", fontSize: (  windowWidth * 3.5  )/100  }}>
                      Te notificaremos si se te asigna algún espacio para la siguiente sesión:
                      </Text>
                 </View>
            </View>
            <View style={styles.listClass}>
                <View style={styles.classInfo}>
                    <TouchableOpacity style={styles.containerClassinfo} >
                        <View style={{ width: "90%" }}>
                            <Text style={{ fontWeight: "bold" }}>06:00 AM LUNES 20 DE OCTUBRE 2020</Text>
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

                        </View>
                    </TouchableOpacity>


                </View>
                <View style={styles.separator} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    x: {
        marginTop: 5,
        width: "90%",
        height: "7%",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    close: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "black",
        opacity: 0.8,
        left: 20,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    listClass: {
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 20
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


    },
    containerinfo: {
        marginTop: 5,
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

    containerClassinfo: {
        width: "90%",
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 10,

    },

})
