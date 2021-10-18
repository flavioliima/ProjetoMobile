import * as React from 'react';
import { View, Text } from 'react-native';
import { AppToolbar } from '../../../Components/toolbar';

export interface ConfigInfoScreenProps {
}

export function ConfigInfoScreen (props: ConfigInfoScreenProps) {
    return (
      <View>
        <AppToolbar titulo="Configurações" back/>
         <Text>ConfigInfoScreen</Text>
      </View>
    );
}
