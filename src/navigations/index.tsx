import React from "react";
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from "../screens/login/login.funcao";
import { Cadastro } from "../screens/login/cadastro.funcao";
import { AppNavegacao } from "./drawer-menu";
import inicioScreen from "../screens/login/Inicial.funcao";
import { Repertorios } from "../screens/login/repertorio.funcao";
import { MusicaSelecionar } from "../screens/login/musica.funcao";
import { View } from "react-native";
import firebase from "firebase";

const Stack = createStackNavigator();

const InicialScreen = () => {
    const nav = useNavigation();
    firebase.auth().onAuthStateChanged(usuario => {
        nav.navigate((usuario == null ? 'login' : 'app'))
    })
    
    return <View/>
}

export function MainNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animationEnabled:true, headerShown: false}}>
                <Stack.Screen name="inicial" component={InicialScreen}/>
                <Stack.Screen name="inicio" component={inicioScreen}/>
                <Stack.Screen name="login" component={LoginScreen}/>
                <Stack.Screen name="cadastro" component={Cadastro}/>
                <Stack.Screen name="app" component={AppNavegacao}/>
                <Stack.Screen name="repertorio" component={Repertorios}/>
                <Stack.Screen name="musica" component={MusicaSelecionar}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}