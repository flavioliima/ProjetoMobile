import * as React from 'react';
import { View, Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppToolbar } from '../../Components/toolbar';
import { ItemMusicos } from '../home/components';
import { Musicos } from '../../models/musicos';

export interface MusicosScreenProps {
}

export function HomeScreen (props: any) {
    const nav = useNavigation();
    const route = useRoute();
    return (
      <View>
          <AppToolbar titulo="Artistas da noite" menu/>
          <ItemMusicos musicos={new Musicos('Flávio Lima', '17/10/2021')} onEditar={(musicos: Musicos)=> console.log(musicos)} onExcluir={(id: string) => console.log(id)}/>
          <ItemMusicos musicos={new Musicos('Flávio Lima', '17/10/2021')} onEditar={(musicos: Musicos)=> console.log(musicos)} onExcluir={(id: string) => console.log(id)}/>
        

      </View>
    );
}
