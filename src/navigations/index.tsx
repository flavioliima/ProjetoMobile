import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from "../screens/login/login.funcao";
import { Cadastro } from "../screens/login/cadastro.funcao";
import { AppNavegacao } from "./drawer-menu";
import inicioScreen from "../screens/login/Inicial.funcao";
import { Repertorios } from "../screens/login/repertorio.funcao";
import { MusicaSelecionar } from "../screens/login/musica.funcao";

const Stack = createStackNavigator();

export function MainNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animationEnabled:true, headerShown: false}}>
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