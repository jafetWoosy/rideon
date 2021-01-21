import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ClassInfo from './app/home/classInfo';
import SelectAsiento from './app/home/selectAsiento';
import Index from './app/home/Index';
import IndexStore from './app/store/index';
import Product from './app/store/Product';

import DataSend from './app/store/dataSend';
import Navigation from './app/navigation/navigation';




export default function App() {
  return (
    <Navigation/>
  )
}


