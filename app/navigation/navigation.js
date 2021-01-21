import React from 'react';
import {  Dimensions} from 'react-native';

import { NavigationContainer } from  '@react-navigation/native';
import {  createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {   createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { FontAwesome, EvilIcons, Ionicons, AntDesign, Feather } from '@expo/vector-icons';



//   ----   pantallas de login  --- 
  
import Index from '../../app/home/Index';
import ClassInfo from '../../app/home/classInfo';
import SelectAsiento from '../../app/home/selectAsiento';


// pantallas de carrito 
import IndexStore from '../../app/store/index';
import Product from '../../app/store/Product';
import DataSend from '../../app/store/dataSend';
import Domicilio from '../../app/store/domicilio';
import Pago from '../../app/store/pago';


// end pantallas de carrito 


// -----  pantallas calendario ------- 
import IndexCalendar from '../../app/calendar/index';
import Waiting from '../../app/calendar/waiting';
import ListWaiting from '../../app/calendar/listWaiting';
 
// ----   end calendario  ------------



//   ----- pantallas de perfil ---------- 
  import IndexProfile from '../profile/IndexProfile';
  import InfoTeacher from '../profile/infoTeacher';

// end pantallas de perfil 



const SingnInStack  = createStackNavigator();
const CartStack  = createStackNavigator();
const CalendarStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const AppTabs = createBottomTabNavigator();


const SignStackScreen = () =>  (
         <SingnInStack.Navigator>
            <SingnInStack.Screen name="HomeScreen" component={Index} options={{  headerShown: false }}  />
            <SingnInStack.Screen name="ClassInfo" component={ ClassInfo } options={{  headerShown: false }}  />
            <SingnInStack.Screen name="asientoScreen" component={ SelectAsiento } options={{  headerShown: false }}  />
         </SingnInStack.Navigator> 
     )




     const CartStackScreen = () =>  (
         <CartStack.Navigator>
             <CartStack.Screen  name="CartScreen" component={ IndexStore }  options={{  headerShown: false }} />
             <CartStack.Screen  name="Product" component={ Product }   />
             <CartStack.Screen  name="envio" component={ DataSend }    />
             <CartStack.Screen  name="domicilio" component={ Domicilio }    />
             <CartStack.Screen  name="Pago" component={ Pago }    />


         </CartStack.Navigator>
     )



     const CalendarStackScreen = () => (
         <CalendarStack.Navigator 
         screenOptions={({ route }) => {
             return{
                 gestureEnabled: true,
                 cardOverlayEnabled: true,
                 ...TransitionPresets.ModalPresentationIOS,
             }
         }}
         >
           <CartStack.Screen  name="Calendario"   component={ IndexCalendar }  options={{  headerShown: false }}/>
           <CartStack.Screen  name="waiting"   component={ Waiting }  options={{  headerShown: false }}/>
           <CartStack.Screen  name="listwaiting"   component={ ListWaiting }  options={{  headerShown: false }}/>
           </CalendarStack.Navigator>
     )

     const PorfileStackScreen = ( ) => (
         <ProfileStack.Navigator>
            <ProfileStack.Screen  name="Perfil"  component={ IndexProfile }   options={{  headerShown: false }} />
            <ProfileStack.Screen  name="Informacion"  component={ InfoTeacher }   options={{  headerShown: false }}  />
         </ProfileStack.Navigator>
     )

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

     const configTabs = {
        labelStyle:{
            fontSize:0,
            color: "transparent"
        },

        style: {
            height: (   windowWidth * 15    )/100,
        },
        tabStyle: {
            marginTop: 6,
           
        }
    } 

const AppTabsScreen = () => (
        <AppTabs.Navigator
        tabBarOptions={configTabs}
        >
                                            
           <AppTabs.Screen  name="Home" component={ SignStackScreen  }   options={{  tabBarIcon: (props) => <Feather name="flag" size={30} color="black" color={  props.focused ?   "black" : "#DDDDDD"  }  />  }} />
           <AppTabs.Screen name="calendar" component ={ CalendarStackScreen  } options={{  tabBarIcon: (props) => <AntDesign  name="calendar" size={30} color={  props.focused ?   "black" : "#DDDDDD"  }  />  }} />

           <AppTabs.Screen name="cart" component ={ CartStackScreen  }    options={{  tabBarIcon: (props) => <AntDesign  name="shoppingcart" size={35}  color="#000" color={  props.focused ?   "black" : "#DDDDDD"  }   />  }}/>
           <AppTabs.Screen name="profile" component ={ PorfileStackScreen  }     options={{  tabBarIcon:  (props) => <Feather  name="user" size={30}  color={  props.focused ?   "black" : "#DDDDDD"  }   />  }}/>


        </AppTabs.Navigator>
    )







    

export default () =>  (
   
       <NavigationContainer>
           <AppTabsScreen/>
       </NavigationContainer>
)


