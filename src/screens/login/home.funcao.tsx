import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


export interface homeScreenProps {
}

export default function homeScreen (props: homeScreenProps) {

    const nav = useNavigation();
    
    return (
      <ImageBackground source={require('./../../imgs/inicio.png')} style={styles.background}>
          <View style={styles.cotainer}>
            <Button title="Entrar" buttonStyle={{borderRadius: 30, backgroundColor: '#D96130', padding: 10}} onPress={() => nav.navigate('login')}/>
          </View>

      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    width: '100%', 
    height: '100%',
  },
  cotainer:{
    flex: 1,
    padding: 20,
    paddingTop: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },

});

