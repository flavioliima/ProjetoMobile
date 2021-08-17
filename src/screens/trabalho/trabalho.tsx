import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

export interface TrabalhoProps {
}

export interface TrabalhoState {
}

export default class Trabalho extends React.Component<TrabalhoProps, any> {
  constructor(props: TrabalhoProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={{backgroundColor: '#F7EBE8' ,width: '100%', height: '100%'}}>
        <View style={{flex: 1, backgroundColor: 'red', flexDirection: 'column', justifyContent: 'space-evenly', borderBottomLeftRadius: 60, borderBottomRightRadius: 60}}>
          
          <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>Bem vindo, Flávio</Text>
          
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'white'}}>Você gastou hoje</Text>
            <Text style={{fontSize: 30, color: 'white'}}>R$ 500</Text>
          </View>

          <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Escolher período</Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{fontSize: 15, color: 'white', }}>Hoje</Text>
            <Text style={{fontSize: 15, color: 'white', }}>Essa Semana</Text>
            <Text style={{fontSize: 15, color: 'white', }}>Esse Mês</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30, alignItems: 'flex-start'}}>
          <Button style={{backgroundColor: 'black'}} icon={{name: 'flight', color: 'white'}}/>
          <Button style={{backgroundColor: 'black'}} icon={{name: 'home', color: 'white'}}/>
          <Button style={{backgroundColor: 'black'}} icon={{name: 'local-dining', color: 'white'}}/>
          <Button style={{backgroundColor: 'black'}} icon={{name: 'star', color: 'white'}}/>
          <Button style={{backgroundColor: 'black'}} icon={{name: 'build', color: 'white'}}/>
        </View>

        <View style={{flex: 1, flexDirection: 'column', padding: 10, paddingTop: 30 ,alignItems: 'stretch'}}>
          <View style={{backgroundColor: 'white', borderRadius: 10, padding: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Pizza(R$ 30)</Text>
            <Text>20/01/2021</Text>
          </View>

          <View style={{backgroundColor: 'white', borderRadius: 10, padding: 30, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
            <Text>Coca-Cola(R$ 10)</Text>
            <Text>20/01/2021</Text>
          </View>
        </View>


      </View>
      
    );
  }
}
