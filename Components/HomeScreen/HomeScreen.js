import { useEffect, useState } from "react";
import { ScrollView, View, Alert, Vibration } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { _readAll, _deleteAll } from "../../helpers/CRUD";
import { TaskBox } from "../TaskBox/TaskBox";
import { styles } from "./style";

export function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            getData();
        }
    }, [isFocused])

    return (
        <View style={styles.main}>
            <AntDesign
                name="plussquareo"
                size={30}
                color="#a3654e"
                style={{ alignSelf: 'flex-end' }}
                onPress={() => navigation.navigate('NewTask')}
                onLongPress={() => {
                    if (tasks.length != 0) {
                        Alert.alert(
                            'Attention',
                            'Remove all notes ?',
                            [
                                {
                                    text: "Cancel",
                                    style: "cancel"
                                },
                                {
                                    text: "Remove",
                                    onPress: () => {
                                        _deleteAll();
                                        Vibration.vibrate();
                                        getData();
                                    },
                                    style: 'destructive'
                                }
                            ]
                        );
                    }
                }}
            />

            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
                {
                    tasks.map(task =>
                        <TaskBox navigation={navigation} item={task} update={getData} key={task._key} />
                    )
                }
            </ScrollView>
        </View>
    )

    async function getData() {
        let data = await _readAll();
        setTasks(data);
    }
}