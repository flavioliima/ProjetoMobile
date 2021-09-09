import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from "../screens/login/login.funcao";
import { Cadastro } from "../screens/login/cadastro.funcao";
import homeScreen from "../screens/login/home.funcao";
import { MusicosScreen } from "../screens/login/musicos.funcao";

const Stack = createStackNavigator();

export function MainNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={homeScreen}/>
                <Stack.Screen name="login" component={LoginScreen}/>
                <Stack.Screen name="cadastro" component={Cadastro}/>
                <Stack.Screen name="musicos" component={MusicosScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}