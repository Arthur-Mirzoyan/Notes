import { useEffect, useState } from "react";
import { ScrollView, Text, View, TextInput } from "react-native";
import { _update } from "../../helpers/CRUD";
import { styles } from "./style";

export function SingleTask({ navigation, route }) {
    const item = route.params.item;
    const isEditable = route.params.isEditable;
    const { _title: title, _text: text, _date: date, _key: key } = item;
    const { year, month, day, hours, minutes } = date;

    const [newText, setNewText] = useState(text);

    navigation.setOptions({ title: title.toUpperCase() })

    useEffect(() => {
        return () => {
            if (isEditable) {
                _update(key, item, newText);
            }
        };
    })

    return (
        <View style={styles.main}>
            <ScrollView style={styles.scoll}>
                <TextInput
                    style={styles.text}
                    editable={isEditable}
                    onChangeText={text => setNewText(text)}
                >{text}
                </TextInput>
            </ScrollView>
            <Text style={{ paddingBottom: 10 }}>
                {`Created on: ${day}/${month}/${year} , ${hours}:${minutes}`}
            </Text>
        </View>
    )
}