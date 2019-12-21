import React, {useState, useEffect} from 'react'
import {withNavigation} from 'react-navigation'
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native'

import Styles from './styles'
import api from '../../services/api'
import styles from './styles';

function SpotList(props){

    const [spots, setSpots]= useState([]);

    useEffect(() =>{
        async function loadSpots(){
            const response = await api.get('/spots', {
                params:{ tech : props.tech}
            })
            setSpots(response.data)
        }
        loadSpots()
    }, [])

    function handleNavigate(id){
        console.log(id)
        props.navigation.navigate('Book', {id})
    }
    
    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Empresas que usam <Text style={Styles.bold}>{props.tech}</Text> </Text>
            <FlatList
                style={Styles.list}
                data={spots}
                keyExtractor = {spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={Styles.listItem}>
                        <Image style={Styles.thumbnail} source={{uri: item.thumbnail_url }}/>
                        <Text style={styles.company}>{item.company}</Text>
                        <TouchableOpacity onPress={() => handleNavigate(item._id)} style={Styles.btn}>
                            <Text style={styles.btnText}> Solicitar reserva </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default withNavigation(SpotList)