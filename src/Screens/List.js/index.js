import React, {useState, useEffect} from 'react'
import {View, SafeAreaView, ScrollView ,Text, AsyncStorage, Alert} from 'react-native'
import { API_URL } from 'react-native-dotenv'

import socketio from 'socket.io-client'

import Logo from '../../Components/Logo'
import Styles from './styles'
import SpotList from '../../Components/SpotList'

export default function List(){

    const [techs, setTechs] = useState([])

    useEffect(() =>{
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio(API_URL , {
                query: {user_id}
            })
            socket.on('booking_response', booking =>{
                Alert.alert(`sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })
        })
    }, [])

    useEffect(() =>{
        AsyncStorage.getItem('techs').then(techs =>{
            if(techs !== ''){
                const techsArray = techs.split(',').map(tech => tech.trim())
                setTechs(techsArray)
            }
        })
    }, [])

    return( 
        <SafeAreaView style={Styles.container}>
            <View style={Styles.viewLogo}>
                <Logo/>
            </View>
            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech}/>)}
            </ScrollView>
        </SafeAreaView>
    )
}