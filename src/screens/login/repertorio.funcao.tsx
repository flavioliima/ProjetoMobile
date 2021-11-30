import * as React from 'react';
import { View, Text, Alert, ToastAndroid, StyleSheet, Share, Platform} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppToolbar } from '../../Components/toolbar';
import { ItemRepertorio } from '../home/componentsRepertorio';
import { Repertorio } from '../../models/repertorio';
import { useRef, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Button, Icon, Input } from 'react-native-elements';
import { Modalize } from 'react-native-modalize';
import { Formik } from 'formik';

export interface RepertoriosScreenProps {
}

export function Repertorios (props: any) {
    const nav = useNavigation();
    const route = useRoute();

    const modalizeRef = useRef<Modalize>();
    const recursoNativo = ()=> {Share.share({message:'Venha conhecer a inovação nesse APP!'})}
    const [alterouLista, setAlterouLista] = useState(false)
    const [repertorio, SetMusicos] = useState([
      new Repertorio('Bob Marley', require('../../imgs/artistas/bob-marley-artista.jpg')),
      new Repertorio('Dread Mar I', require('../../imgs/artistas/dread-mar-i-artista.jpg')),
      new Repertorio('Edson Gomes', require('../../imgs/artistas/edson-gomes-artista.jpg')),
      new Repertorio('Gregory Isaacs', require('../../imgs/artistas/gregory-isaacs-artista.jpg')),
      new Repertorio('Natiruts', require('../../imgs/artistas/natiruts-artista.jpg'))
    ]);

      
    /*const recursoNativo = () => {
      if (Platform.OS == 'web') console.log('Negado')
      else Share.share({message:'blbalbabl'})
    }*/

    return (
      <View >
          <AppToolbar titulo="Repertorio Artista" back />
          <FlatList data={repertorio} keyExtractor={(item, index)=> String(index)} renderItem={(data)=>(
            <ItemRepertorio repertorio={data.item} abrirRepetorio={() => modalizeRef.current?.open()} Compartilhamento={recursoNativo}/>
          )}/>
        

        <Modalize ref={modalizeRef} modalStyle={{padding: 20}} HeaderComponent={()=> (<Text style={{textAlign: 'center', marginBottom: 2}}>Artista</Text>)} modalTopOffset={300}>
            <Text style={styles.titulo}>Bob Marley</Text>
            <Text style={{}}>1 - Could You Be Loved</Text>
            <Text style={{}}>2 - Redemption Song</Text>
            <Text style={{}}>3 - Rastaman Chant</Text>
            <Text style={{}}>4 - Africa Unite</Text>
            <Text style={{}}>5 - Rebel Music </Text>
            <Text style={{}}>6 - Bad Boys Roots</Text>
            <Text style={{}}>7 - Rock</Text>
            <Text style={{}}>8 - Reggae</Text>
            <Text style={{}}>9 - Buffalo</Text>
            <Text style={{}}>10 - Soldier</Text>
            <Text style={{}}>11- Waiting In Vain</Text>
            <Text style={{}}>12 - Concrete Jungle</Text>
            <Text style={{}}>13 - Is This Love</Text>
            <Text style={{}}>14 - Slogans</Text>

            <Input placeholder='Informe a música desejada' leftIcon={ <Icon name='star' size={20}color='black'/>}/>
            <Button title={"Enviar Música"} buttonStyle={{borderRadius: 30, backgroundColor: '#D96130'}} onPress={()=> alert('Enviado com sucesso!')}/>
            
        </Modalize>




        
          
      </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 30, 
        textAlign: 'center', 
        fontWeight:  'bold', 
        marginBottom: 10
    },


});