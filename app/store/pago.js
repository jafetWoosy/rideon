import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Pago() {
    return (
        <View style={styles.container}>
            <View style={styles.sectionTwo}>
                <View style={styles.footerTitle}>
                    <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 5.4) / 100 }}>Datos de  pago</Text>
                </View>

                <View style={styles.description}>
                    <Text style={{ fontSize: (windowWidth * 4) / 100, color: "#B3B3B3" }}>Isopure, Zero Carb, Protein Powder, Strawberries & Cream, 3 lb (1.36 kg)</Text>
                </View>
                <View style={styles.description}>
                    <Text style={{ fontWeight: "bold", fontSize: (windowWidth * 6) / 100 }}>$1150</Text>
                </View>
                <View style={styles.description}>
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingLeft: 10, fontWeight: "bold" }}
                        onChangeText={text => onChangeText(text)}
                        placeholder="Titular de la tarjeta"
                        textAlign="left"
                    />

                </View>
                <View style={styles.description}>
                    <TextInput
                        style={{ height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingLeft: 10, fontWeight: "bold" }}
                        onChangeText={text => onChangeText(text)}
                        placeholder="Numero de tarjeta"
                        textAlign="left"
                    />

                </View>
                <View style={{ width: "80%",  flexDirection: "row", justifyContent: "space-between" }}>
                <TextInput
                style={{ height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingLeft: 10, fontWeight: "bold", width: "47%" }}
                onChangeText={text => onChangeText(text)}
                placeholder="MM/YY"
                textAlign="left"
            />
            <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 8, paddingLeft: 10, fontWeight: "bold", width: "47%" }}
            onChangeText={text => onChangeText(text)}
            placeholder="CVC"
            textAlign="left"
        />
                </View>
                
            </View>
            <View style={styles.bottom}>
                <View style={[styles.description, { alignItems: "flex-end" }]}>
                    <View style={styles.circle}>
                        <FontAwesome name="chevron-right" size={30} style={{ color: 'white' }} />

                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
        
    },
    description: {
        width: "80%",

    },
    footerTitle: {
        width: "80%",

    },
    sectionTwo: {
        marginTop: 40,
        backgroundColor: "white",
        width: "100%",
        height: "50%",
        alignItems: "center",
        justifyContent: "space-around"

    },

    bottom: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        justifyContent: "flex-end",
        
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