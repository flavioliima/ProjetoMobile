import * as React from 'react';
import { View, Text } from 'react-native';
import { AppToolbar } from '../../Components/toolbar';

export interface MusicaSelecionarProps {
}

export function MusicaSelecionar (props: MusicaSelecionarProps) {
    return (
      <View>
          <AppToolbar titulo="Configurações" back/>
         <Text>MusicaSelecionar</Text>
      </View>
    );
}
