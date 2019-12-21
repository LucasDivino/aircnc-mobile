import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
    },
    title:{
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold:{
        fontWeight: 'bold',
    },
    list:{
        paddingHorizontal: 20,
    },
    listItem:{
        marginRight: 15,
    },
    thumbnail:{
        backgroundColor: '#eee',
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2
    },
    company:{
        fontSize :24,
        fontWeight: 'bold',
        color: '#333',
        marginTop:10
    },
    btn:{
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 2,
        marginTop: 15,
    },
    btnText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default styles