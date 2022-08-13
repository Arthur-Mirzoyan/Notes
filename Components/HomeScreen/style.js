import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: '#f1eae4'
    }
})