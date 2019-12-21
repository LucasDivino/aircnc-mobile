import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        flexDirection: "row"
    },
    logoColor:{
        color: '#f05a5b',
    },
    textLogo:{
        marginTop: 7,
        fontSize: 30
    },
    label:{
        fontWeight :'bold',
        color: '#444',
        marginBottom: 8,
    },
    form:{
        alignSelf: "stretch",
        paddingHorizontal: 30,
        marginTop:30
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
    }

})

export default styles