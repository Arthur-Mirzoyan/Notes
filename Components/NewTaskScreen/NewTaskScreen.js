import { useState } from "react";
import { TextInput, ScrollView, View } from "react-native";
import { styles } from "./style";
import { _create } from "../../helpers/CRUD";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import uuid from 'react-native-uuid';

export function NewTaskScreen({ navigation }) {
    const today = new Date();

    const [icon, setIcon] = useState("content-save-all-outline");
    const [value, setValue] = useState({
        _key: uuid.v4(),
        _title: "",
        _text: "",
        _date: {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate(),
            hours: today.getHours(),
            minutes: today.getMinutes()
        }
    });

    return (
        <View style={styles.main}>
            <MaterialCommunityIcons
                name={icon}
                size={34}
                color="#a3654e"
                style={styles.save}
                onPress={() => {
                    if (value._text.trim() != "") {
                        _create(value._key, value);
                        navigation.navigate('Home');
                    }
                }}
            />
            <ScrollView contentContainerStyle={styles.scroll}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        setValue({ ...value, _title: text.trim() });
                        setIcon("content-save-alert-outline");
                    }}
                    placeholder='Title [optional]'
                    placeholderTextColor='gray'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => {
                        setValue({ ...value, _text: text.trim() });
                        setIcon("content-save-alert-outline")
                    }}
                    placeholder='Text'
                    placeholderTextColor='gray'
                    multiline={true}
                    keyboardAppearance='dark'
                />
            </ScrollView>
        </View>
    )
}