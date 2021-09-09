import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';

export interface InputRoundProps {
    texto?: string;
    senha?: boolean;
    icone?: string;
    placeholder?: string;
    onChangeText?(texto : string):void;
    onBlur?(erro: any): void;
}

export function InputRound (props: InputRoundProps) {
    return (
      <View>
         { props.texto && <Text style={styles.text}>{props.texto}</Text>}
         <Input placeholder={props.placeholder}
            onBlur={props.onBlur}
            placeholderTextColor='lightgrey' 
            leftIcon={{name: props.icone, color: 'white'}} 
            onChangeText={props.onChangeText}
            secureTextEntry={props.senha}
            keyboardType="email-address" 
            inputStyle={{color: 'white'}} inputContainerStyle={styles.inputContainer}
         />
      </View>
    );
}

const styles = StyleSheet.create({

    text: {
        color: 'white',
        fontSize: 20
    },

    inputContainer:{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 5,
        borderRadius: 30
    },
});