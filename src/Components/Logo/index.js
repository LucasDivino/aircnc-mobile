import React from 'react'
import {View, Text} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Styles from './styles'

export default function logo(){
    return(
        <View style={Styles.logo}>
            <FontAwesomeIcon icon={ faCoffee } style={Styles.logoColor}  size={ 64 } />
            <Text style={Styles.textLogo}> aircnc</Text>
        </View>
    )
}