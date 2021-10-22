import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Musicos } from '../../models/musicos';


export interface ItemMusicosProps {
    musicos: Musicos
    onEditar(musicos: Musicos):void
    onExcluir(id?: string):void
    onSelecionar(musicos: Musicos):void
}

export function ItemMusicos (props: ItemMusicosProps) {
    const { musicos } = props;
    const nav = useNavigation();
    return (
        <SwipeRow leftOpenValue={200} disableRightSwipe rightOpenValue={-180} stopRightSwipe={-180}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button onPress={() => nav.navigate('repertorio')} icon={{name: "list", size: 15, color: "white"}} buttonStyle={styles.btnSelecionar} containerStyle={{borderRadius: 0}}/>
                <Button onPress={() => props.onEditar(musicos)} icon={{name: "edit", size: 15, color: "white"}} buttonStyle={styles.btnEditar} containerStyle={{borderRadius: 0}}/>
                <Button onPress={() => props.onExcluir(musicos.id)} icon={{name: "delete", size: 15, color: "white"}} buttonStyle={styles.btnExcluir} containerStyle={{borderRadius: 0}}/>
            </View>
            
            <View style={styles.container}>
                <Image style={styles.tinyLogo} source={props.musicos.imagem}/>
                <Text style={styles.textoAlinhado}>{props.musicos.descricao}</Text>
                <Text style={styles.textoAlinhado}>{props.musicos.data}</Text>
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