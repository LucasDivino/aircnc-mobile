import React, {useState, useEffect} from 'react'
import {View, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, AsyncStorage} from 'react-native'

import Logo from '../../Components/Logo'

import Styles from './styles'
import api from '../../services/api'
 

export default function Login({navigation}){

    const [email, setEmail] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(user =>{
            if(user){
                navigation.navigate('List')
            }
        })
    }, [])
    

    async function handleSubmit(){
        const response = await api.post('/sessions', {
            email
        })

        const {_id} = response.data

        await AsyncStorage.setItem('user', _id)
        await AsyncStorage.setItem('techs', techs)

        navigation.navigate('List')
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={Styles.container}>
             
             <Logo/>

            <View style={Styles.form}>
                <Text style={Styles.label}> SEU E-MAIL *</Text>
                <TextInput
                    style={Styles.input}
                    placeholder="Seu melhor e-mail"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={Styles.form}>
                <Text style={Styles.label}> TECNOLOGIAS*</Text>
                <TextInput
                    style={Styles.input}
                    placeholder="Suas tecnologias de interesse"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />
                <TouchableOpacity onPress={handleSubmit} style={Styles.btn}>
                    <Text style={Styles.btnText}>
                        Encontrar spots
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}