import { Formik } from 'formik';
import * as Yup from 'yup';
import * as React from 'react';
import { ActivityIndicator, ToastAndroid } from 'react-native';
import { ImageBackground } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { InputRound } from '../login/components';
import firebase from 'firebase';


export interface CadastroProps {
    navigation: any;
}

export function Cadastro (props: CadastroProps) {

    const cadastrar = async(dados)=>{
        firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
            .then((usuario) => alert('Usuario Criado com sucesso!'))
            .catch((error) => {
                console.log(error)
                console.log(error.code)
                alert('Não foi possivel criar o usuário');
            });
    }
    return (
      <ImageBackground source={require('./../../imgs/fundoCadastro.png')} style={styles.background}>

        <Formik
            initialValues={{email:'', senha:''}}
            validationSchema={Yup.object().shape({
                email: Yup.string().required('O campo email é obrigatório').email('O campo precisa ser um email'),
                senha: Yup.string().required('O campo senha é obrigatório').min(6, 'A senha precisa ter pelomenos 6 caracteres')
            })}
            onSubmit={cadastrar}>


            {({handleChange, handleSubmit, handleBlur, isSubmitting , errors, touched}) => (
            <View style={styles.container}>


                <Text style={styles.CadastroUsuario}>Cadastro de usuário</Text>
                
                <Text style={styles.TextoFormulario}>Email:</Text>
                <InputRound onBlur={handleBlur('email')} onChangeText={handleChange('email')} placeholder='Digite seu email' icone='email' />

                <Text style={styles.TextoFormulario}>Senha</Text>
                <InputRound onBlur={handleBlur('senha')} onChangeText={handleChange('senha')} placeholder='Digite sua senha' senha icone='lock'/>

                {isSubmitting && <ActivityIndicator size='large' color='orange'/>}
                {!isSubmitting && <Button title="Cadastrar" onPress={() => handleSubmit()} buttonStyle={{borderRadius: 30, backgroundColor: '#D96130'}}/>}

                <Button title="Voltar" buttonStyle={{borderRadius: 30, backgroundColor: '#D96130', marginTop: '5p%'}} onPress={() => props.navigation.navigate('login')}/>
                
            </View>)}
        </Formik>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
      width: '100%', 
      height: '100%',
  },
  container:{
      flex: 1,
      padding: 10,
      paddingTop: 50,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch'
  },

  inputContainer:{
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      padding: 5,
      borderRadius: 30
  },

  Texto:{
      color: 'white',
      fontSize: 20,
      textDecorationLine: 'underline',
      textAlign: 'center',
      margin: 30
  },
  ErroLabel: {
      color: 'red', 
      fontSize: 18, 
      textAlign: 'center',
      marginBottom: 8
  },
  CadastroUsuario: {
    fontSize: 15,
    color: 'orange',
    textAlign: 'center',
    marginTop: 50,
    paddingBottom: 15
  },

  TextoFormulario:{
    marginLeft: 25,
    marginBottom: 3,
    
    color: 'orange'
  }

});

