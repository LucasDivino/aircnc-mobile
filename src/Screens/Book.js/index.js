import React, {useState}from 'react'
import {SafeAreaView, AsyncStorage, Text, TextInput, TouchableOpacity, Alert} from 'react-native'

import Styles from './Styles'
import api from '../../services/api'

export default function Book({navigation}){
    const id = navigation.getParam('id')

    const [date, setDate] = useState('')

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user')

        await api.post(`/spots/${id}/bookings`,{date}, {headers: { user_id}})

        Alert.alert('solicitação de visita enviada.')

        navigation.navigate('List')
    }

    function handleCancel() {
        navigation.navigate('List')
    }

    return(
        <SafeAreaView style={Styles.container}>
             <Text style={Styles.label}> DATA DE INTERESSE *</Text>
                <TextInput
                    style={Styles.input}
                    placeholder="Qual data você quer visitar?"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={date}
                    onChangeText={setDate}
                />
                <TouchableOpacity onPress={handleSubmit} style={Styles.btn}>
                    <Text style={Styles.btnText}>
                        Solicitar visita
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleCancel} style={[Styles.btn, Styles.btnCancel]}>
                    <Text style={Styles.btnText}>
                        Cancelar
                    </Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}