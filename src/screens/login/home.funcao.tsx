import * as React from 'react';
import { View, Text, Alert, ToastAndroid} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppToolbar } from '../../Components/toolbar';
import { ItemMusicos } from '../home/components';
import { Musicos } from '../../models/musicos';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';

export interface MusicosScreenProps {
}

export function HomeScreen (props: any) {
    const nav = useNavigation();
    const route = useRoute();


    const [alterouLista, setAlterouLista] = useState(false)
    const [musicos, SetMusicos] = useState([
      new Musicos('Jorge Bob - Reggae','20/10', require('../../imgs/musicos/reggae.jpg'), '1'),
      new Musicos('João Gomes - Forró','20/10', require('../../imgs/musicos/forro.jpg'), '2'),
      new Musicos('Josefina Fina - Rock','21/10', require('../../imgs/musicos/rock.jpg'), '3'),
      new Musicos('Gabriel Xuxu - Pagode','22/10', require('../../imgs/musicos/pagode.jpg'), '4'),
      new Musicos('Lucas Coelho - Sertanejo','22/10', require('../../imgs/musicos/sertanejo.jpg'), '5')
    ]);

    const AdicionarNovoMusico = ()=>{
      const novosMusicos = musicos;
      novosMusicos.push(new Musicos('Novo Músico - Avulso', '30/10', require('../../imgs/usuario.png'), '203'))
      SetMusicos(novosMusicos)
      console.log('clicou');

      setAlterouLista(!alterouLista);
    }

    const excluir = (id: string)=>{
      Alert.alert('Excluir Musico', 'Deseja Realmente excluir o músico? #'+id,[
        {text: 'Confirmar', onPress:()=> ToastAndroid.show('Musico Excluido', ToastAndroid.LONG)},
        {text: 'Cancelar'}
      ])
       
    }

    return (
      <View >
          <AppToolbar titulo="Artistas da noite" menu />
          <Button title="Novo Musico +" buttonStyle={{marginBottom: 3, alignSelf: 'flex-end'}} onPress={AdicionarNovoMusico}/>
          <FlatList data={musicos} keyExtractor={(item, index)=> String(index)} extraData={alterouLista} renderItem={(data)=>(
            <ItemMusicos musicos={data.item} onSelecionar={(musicos: Musicos)=> console.log(musicos.descricao)} onEditar={(musicos: Musicos)=> console.log(musicos)} onExcluir={excluir}/>
          )}/>
        
          
      </View>
    );
}
