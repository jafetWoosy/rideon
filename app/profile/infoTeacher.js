import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;



const Product = () => {
    const navigation = useNavigation();

    const redirectRouter = () => {
        navigation.navigate('envio');
    }
    return (
        <View style={styles.container}>
            <View style={styles.sectionOne}>
                <Image source={require('../../assets/home/Image-2-removebg-preview.png')} resizeMode="cover" style={{ width: "90%", height: (windowHeight * 80) / 100, marginTop: 150 }} />
            </View>
            <View style={styles.sectionTwo}>
                <View style={styles.footerTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 6) / 100 }}>Fernanda Kelly, 24</Text>
                </View>
                <View style={ styles.parrafo1 }>
                    <Text>Good, better, best. Never let it rest. ’Til your good is better and your better is best.” Nutrióloga y Ciclista.
                    Fer ama hacer ejercicio y disfrutar la vida. Si lo que buscas es fortalecer tu cuerpo y tu mente, la clase de Fer es para ti
                    </Text>
                </View>
                <View style={ styles.parrafo1 }>
                    <Text>Good, better, best. Never let it rest. ’Til your good is better and your better is best.” Nutrióloga y Ciclista.
                    Fer ama hacer ejercicio y disfrutar la vida. Si lo que buscas es fortalecer tu cuerpo y tu mente, la clase de Fer es para ti
                    </Text>
                </View>
                <View style={ [styles.parrafo1, { height: ( windowHeight * 5  )/100 }] }>
                    <Text>Good, better, best. Never let it rest. ’Til your good is better and your better is best.” Nutrióloga y Ciclista.
                    </Text>
                </View>
                <View style={ styles.hashtag }>
                     <View style={{ width: "30%", height: "90%", backgroundColor: "#FFE200", borderRadius: 40, alignItems: "center", justifyContent: "center" }}>
                        <Text style={ {  fontWeight: "bold", fontSize: (  windowWidth * 4.5  )/100  }}>#ht1</Text>
                     </View>
                     <View style={{ width: "30%", height: "90%", backgroundColor: "#BCEC9E", borderRadius: 40, alignItems: "center", justifyContent: "center", marginLeft: 20 }}>
                        <Text style={ {  fontWeight: "bold", fontSize: (  windowWidth * 4.5  )/100  }}>#ht1</Text>
                     </View>
                </View>
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
        alignItems: "center",
        justifyContent: "space-around",


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
        width: "90%",

    },

    description: {
        width: "80%",

    },

    circle: {
        width: 70,
        height: 70,
        borderRadius: (70 / 2),
        backgroundColor: "#C0F2A5",
        alignItems: "center",
        justifyContent: "center"
    },

    parrafo1: {
        width: "90%",
        height: ( windowHeight *  12 )/100
    },

    hashtag: {
        width: "90%",
        height: (  windowHeight * 8 )/100,
        flexDirection: "row",
        alignItems: "center"
    }

})
