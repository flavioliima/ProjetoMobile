import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';
import {} from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/core';

export interface AppToolbarProps {
    navigation: any;
    titulo: string;
    menu?: boolean;
    back?: boolean;
}


export function AppToolbar (props: AppToolbarProps) {

    let leftComponent: any = null;
    const navigation = useNavigation();

    if(props.menu)
        leftComponent = (
            <TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.openDrawer())}>
                <MaterialIcons name="menu" size={20} color="white"/>
            </TouchableOpacity>
        )
    else if (props.back)
        leftComponent=(
            
             <TouchableOpacity onPress={()=> navigation.goBack()}>
                 <MaterialIcons name="arrow-back" size={20} color="white"/>
             </TouchableOpacity>
            
            )

    return (
      <View>
         <Header
          containerStyle={{backgroundColor: '#2E2632'}}
          leftComponent={leftComponent} 
          centerComponent={{text:props.titulo, style: {color: '#D96130', fontSize: 20, fontWeight: 'bold'}}}
         />
      </View>
    );
}
