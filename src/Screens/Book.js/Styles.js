import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container:{
        margin: 30,
    },
    btn:{
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 2,
    },
    btnText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    btnCancel: {
        marginTop: 10,
        backgroundColor: '#ccc'
    },
    label:{
        marginTop: 40,
        fontWeight :'bold',
        color: '#444',
        marginBottom: 8,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal:20,
        fontSize: 16,
        color: '#444',
        color:'#444',
        height: 44,
        marginBottom:20,
        borderRadius: 2,
    },

})

export default styles