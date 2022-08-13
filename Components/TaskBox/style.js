import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    taskBox: {
        width: '95%',
        borderColor: '#d8c7b7',
        borderWidth: 1,
        borderRadius: 7,
        marginVertical: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    title: {
        color: 'black',
        fontSize: 30,
        textAlign: 'left'
    },
    text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalBox: {
        width: WIDTH,
        height: '25%',
        backgroundColor: '#5c695f',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        margin: '-10%',
        padding: '5%',
    },
    modalTitle: {
        color: '#fbf5e9',
        fontSize: 30,
        textAlign: 'center'
    },
    modalText: {
        color: '#fbf5e9',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 15
    },
    modalDate: {
        color: '#fbf5e9',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15
    }
})