
import React, {  useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import {  useNavigation  } from '@react-navigation/native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {   SafeAreaProvider   } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {  useFonts  } from 'expo-font';
import AnimateHeader from '../components/AnimateHeader';


const SplahsScreen = () => {
    return(
        <View>
            <Text></Text>
        </View>
    )
}






const arr = [1, 2, 3, 4];


const Index = () => {

     
     const offset = useRef(  new Animated.Value(0)).current;


    let [fontsLoaded] = useFonts({
        'Monserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
        "Monserrat-semibold": require('../../assets/fonts/Montserrat-SemiBold.ttf')
        
    })
     
    const navigation = useNavigation();

    const redirectRouter =  () =>  {
       
       navigation.navigate('ClassInfo');
   }


   if(!fontsLoaded){
       return <SplahsScreen/>
   }else {
    return (
        <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
          
          <AnimateHeader animatedValue={offset} />
          
          <ScrollView
            style={{ flex: 1, backgroundColor: 'white' }}
            contentContainerStyle={{
              alignItems: 'center',
              paddingTop: 50,
              paddingHorizontal: 20
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false }
            )}
          >
          <View style={styles.headerWelcome}>
          <View style={styles.headersectionOne}>
              <Text style={{ marginLeft: 30, fontSize: 25,  fontFamily: "Monserrat-semibold",  }}>Hola, Gaby</Text>
              <Text style={{ marginLeft: 30, color: "#9F9F9F",  fontFamily: "Monserrat", }}>¿Lista para tu sesion indoor?</Text>
          </View>
          <View style={styles.sectionAvatar}>
              <View style={styles.avatar}>
                  <Image source={require('../../assets/home/woman.png')} resizeMode="contain" />
              </View>
          </View>
      </View>
          <View style={styles.promotions}>
                    <View style={[styles.promotionsTitle, {  marginBottom: 24 }]}>
                        <Text style={{ fontSize: 16, fontFamily: "Monserrat-semibold",  }}>Promociones</Text>
                    </View>

                    <Image source={require('../../assets/home/117106580_326950355387600_2123101131886637331_o.png')} style={{
                        width: "85%",
                        height: (windowHeight * 28) / 100,
                    }} resizeMode="contain" />

                </View>

                <View style={styles.nextClass} >
                    <View style={[styles.promotionsTitle, {  marginTop: 24 }]}>
                        <Text style={{  fontSize: 16, fontFamily: "Monserrat-semibold",  }}>Próximas clases</Text>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={styles.ScrollHorizontal} showsHorizontalScrollIndicator={false} style={{ left: 5 }} >
                        {
                            arr.map(element => {
                                return (
                                    <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", marginLeft: 23,  }} onPress={ redirectRouter }>
                                        <ImageBackground source={require('../../assets/home/fernanda.png')} style={styles.classSingle}
                                            resizeMode="contain"
                                        >
                                            <View style={styles.nameTeacher} >
                                                <Text style={{ color: "white",  fontFamily: "Monserrat", }} >Liz</Text>
                                            </View>
                                        </ImageBackground>
                                       <View style={{  flexDirection: "row", alignItems: "flex-end", justifyContent: "center", marginTop: 5 }}>
                                       <Text style={{  fontSize: (  windowWidth * 3.9  )/100, fontFamily: "Monserrat-semibold",   }}>Hoy 5:30</Text>
                                       <Text style={{  fontSize: (  windowWidth * 2.8 )/100, fontFamily: "Monserrat-semibold",  }}>PM</Text>
                                       </View> 
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.tomorrow}>
                    <View style={{ width: "30%", height: "100%" }}>
                        <Text style={{ fontSize: 17, fontFamily: "Monserrat-semibold",  }} >Mañana</Text>
                    </View>

                    <View style={{ width: "40%", height: "100%", alignItems: "flex-end" }}>
                        <Text style={{ fontSize: 12,  fontFamily: "Monserrat", }} >Calendario</Text>
                    </View>
                </View>

                <View style={styles.listClass}>
                    <View style={styles.classInfo}>
                        {
                            arr.map(ele => {
                                return (
                                    <View style={styles.containerClassinfo} >
                                        <View style={{ width: "95%", marginBottom: 6  }}>
                                        <Text style={{  fontFamily: "Monserrat-semibold", }}>06:00 AM</Text>
                                        </View>
                                        <View style={styles.containerinfo}>
                                            <View style={styles.infoAvatar}>
                                                <Image source={require('../../assets/home/liz.png')} />
                                            </View>
                                            <View style={styles.infoclasslist}>
                                                <Text>Marta</Text>
                                                <Text>45 min</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    )
   }

    
}


export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headerWelcome: {

        width: "100%",
        flexDirection: "row",
        height: (windowHeight * 15) / 100,
        alignItems: "center",
        marginTop: 20
    },

    headersectionOne: {

        height: "100%",
        width: "72%",
        alignItems: "flex-start",
        justifyContent: "center"

    },

    sectionAvatar: {
        width: "30%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"


    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: (80 / 2),

    },

    promotions: {

        width: "100%",
        height: (windowHeight * 30) / 100,
        alignItems: "center",
        marginTop: 15,
        justifyContent: "space-between"
    },

    promotionsTitle: {
        width: "85%",
        height: 20,

    },

    promotionCard: {
        width: "80%",
        height: (windowHeight * 25) / 100,
        backgroundColor: "pink",
        borderRadius: 10
    },

    nextClass: {
        width: "100%",
        height: (windowHeight * 35) / 100,
        alignItems: "center",
        marginTop: 20,
        



    },
    classSingle: {
        width: (windowWidth * 35) / 100,
        height: (windowWidth * 35) / 100,
        backgroundColor: "white",
        
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
        marginTop: 10,
        alignItems: "center",
        justifyContent: "space-around"
    },
    imageSingleclass: {
        width: "100%",
        height: "80%",

    },

    nameTeacher: {
        backgroundColor: "#BEF2A2",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 25,
        borderRadius: 10,
        top: ( windowWidth * 28 )/100
    },
    tomorrow: {
        width: "100%", height: 40,
        justifyContent: "space-around", flexDirection: "row",
        marginTop: 15
    },

    listClass: {
        width: "100%",
        


        alignItems: "center"
    },

    classInfo: {

        alignItems: "center",
        justifyContent: "center",
        width: "85%",
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
        width: "70%",
        marginLeft: 10,

    }
})