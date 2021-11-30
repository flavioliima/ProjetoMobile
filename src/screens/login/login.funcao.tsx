import * as React from 'react';
import * as Yup from 'yup';
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { InputRound } from './components';
import { Formik } from 'formik';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import firebase from 'firebase';


export interface LoginScreenProps {

}

export default function LoginScreen (props: LoginScreenProps) {

    const nav = useNavigation();
    const[erro, setErro] = useState('');

    const login = async(dados)=>{

        firebase.auth().signInWithEmailAndPassword(dados.email, dados.senha)
            .then((usuario) =>nav.navigate('app'))
            .catch((error) => {
                console.log(error)
                console.log(error.code)
                alert('Falha ao realizar login, usuário ou senha incorreta!');
            });

    }

    return (
        <ImageBackground source={require('./../../imgs/login.png')} style={styles.background}>

        <Formik
            initialValues={{email:'', senha:''}}
            validationSchema={Yup.object({
                email: Yup.string().trim().required('O campo email é obrigatório').email('O campo precisa ser um email'),
                senha: Yup.string().required('O campo senha é obrigatório').min(6, 'A senha precisa ter pelomenos 6 caracteres')
            })}
            onSubmit={login}>


            {({handleChange, handleSubmit, handleBlur, isSubmitting , errors, touched}) => (
            <View style={styles.container}>
                
                
                <InputRound onBlur={handleBlur('email')} onChangeText={handleChange('email')} placeholder='Digite seu email' icone='person'/>
                {touched.email && <Text style={styles.ErroLabel}>{errors.email}</Text>}
                <InputRound onBlur={handleBlur('senha')} onChangeText={handleChange('senha')} placeholder='Digite sua senha' icone='lock' senha/>
                {touched.senha && <Text style={styles.ErroLabel}>{errors.senha}</Text>}

                {isSubmitting && <ActivityIndicator size='large' color='orange'/>}
                {!isSubmitting && <Button title="Entrar" onPress={() => handleSubmit()} buttonStyle={{borderRadius: 30, backgroundColor: '#D96130'}}/>}

                <TouchableOpacity onPress={() => nav.navigate('cadastro')}>
                    <Text style={styles.Texto}>Não possui conta? Clique aqui para se cadastrar!</Text>
                </TouchableOpacity>
                
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
        paddingTop: 240,
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
        paddingBottom: 20 
    }

});
