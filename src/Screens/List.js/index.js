import React, {useState, useEffect} from 'react'
import {View, SafeAreaView, ScrollView ,Text, AsyncStorage} from 'react-native'

import Logo from '../../Components/Logo'
import Styles from './styles'
import SpotList from '../../Components/SpotList'

export default function List(){

    const [techs, setTechs] = useState([])

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