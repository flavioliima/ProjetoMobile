import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/login/home.funcao';
import { ConfigGeralScreen } from '../screens/config/geral';
import { MaterialIcons} from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import firebase from 'firebase';


const Drawer = createDrawerNavigator();

export function AppNavegacao(){
    return(
         <Drawer.Navigator screenOptions={{headerShown: false, drawerLabelStyle:{color: '#D96130'}}}
            drawerContent={(props) => (
                <View>
                    <Text style={{fontSize: 14, marginLeft: 30, marginTop: 20, }}>Bem vindo, {firebase.auth().currentUser?.email}</Text>
                    
                    <DrawerItemList {...props}/>

                    <Button title="Sair" titleStyle={{color:'#D96130'}} type="clear" onPress={() => {
                        firebase.auth().signOut();
                        props.navigation.navigate('login')
                    }}/>
                </View>
                
            )}
         >

             <Drawer.Screen name="home" component={HomeScreen} options={{drawerLabel: 'Home', drawerActiveBackgroundColor: '#2E2632',drawerIcon: () => <MaterialIcons name="home" style={{color: '#D96130'}}/>}}/>
         </Drawer.Navigator>
    )
}