import { ScrollView, Text, View } from "react-native";
import { styles } from "./style";

export function SingleTask({ navigation, route }) {
    const item = route.params.item;
    const { _title: title, _text: text, _date: date, } = item;
    const { year, month, day, hours, minutes } = date;

    navigation.setOptions({ title: title.toUpperCase() })

    return (
        <View style={styles.main}>
            <ScrollView style={styles.scoll}>
                <Text style={styles.text}>{text}</Text>
            </ScrollView>
            <Text style={styles.date}>
                {`Created on: ${day}/${month}/${year} , ${hours}:${minutes}`}
            </Text>
        </View>
    )
}