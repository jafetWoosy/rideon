import React from 'react';
import {  Animated, View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import {   useSafeAreaInsets  } from 'react-native-safe-area-context';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;



const HEADER_HEIGHT = 50;

const AnimateHeader = ({ animatedValue }) => {
      const insets = useSafeAreaInsets();
      const headerHeight = animatedValue.interpolate({
          inputRange: [0, HEADER_HEIGHT  +  insets.top],
          outputRange: [HEADER_HEIGHT +  insets.top, insets.top +20 ],
          extrapolate: 'clamp'
      })
      return (
          <Animated.View 
             style={{
               position: "absolute",
               top: 0,
               left: 0,
               right: 0,
               zIndex: 10,
               height:  headerHeight,
               backgroundColor: "red"


            }}
            
            >
            
               
            
            </Animated.View>
            
            
              
          
      )
};


const styles = StyleSheet.create({
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
})


export default AnimateHeader;