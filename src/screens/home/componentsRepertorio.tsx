import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Repertorio } from '../../models/repertorio';

export interface ItemRepertorioProps {
    repertorio: Repertorio

}

export function ItemRepertorio (props: ItemRepertorioProps) {
    const { repertorio } = props;
    const nav = useNavigation();
    return (
        <SwipeRow leftOpenValue={200} disableRightSwipe rightOpenValue={-120} stopRightSwipe={-120}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button onPress={() => {props.abrirRepetorio(repertorio)}} icon={{name: "list", size: 15, color: "white"}} buttonStyle={styles.btnSelecionar} containerStyle={{borderRadius: 0}}/>
                <Button onPress={() => {props.Compartilhamento(repertorio)}} icon={{name: "verified", size: 15, color: "white"}} buttonStyle={styles.btnSelecionar} containerStyle={{borderRadius: 0}}/>
                
            </View>
            
            <View style={styles.container}>
                <Image style={styles.tinyLogo} source={props.repertorio.imagem}/>
                <Text style={styles.textoAlinhado}>{props.repertorio.descricao}</Text>
            </View>
        </SwipeRow>
      
    );

}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 0.3
    },

    tinyLogo: {
        width: 60,
        height: 60,
        borderRadius: 10
      },

    textoAlinhado:{
        paddingTop: 20
    },

    btnEditar:{width: 60, height: 80,borderRadius: 0},
    btnExcluir:{width: 60, height: 80, backgroundColor: 'red', borderRadius: 0},
    btnSelecionar:{width: 60, height: 80, backgroundColor: 'green', borderRadius: 0}
});