import * as React from 'react';
import { View, Text } from 'react-native';
import { AppToolbar } from '../../../Components/toolbar';

export interface ConfigGeralScreenProps {
}

export function ConfigGeralScreen (props: ConfigGeralScreenProps) {
    return (
      <View>
        <AppToolbar titulo="Configurações" back/>
         <Text>ConfigGeralScreen</Text>
      </View>
    );
}
