import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigation } from './src/navigations';
import firebase from "firebase";
import { firebaseConfig } from './src/config/firebase.config';


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default function App() {
  return (
    <MainNavigation/>
  );
}