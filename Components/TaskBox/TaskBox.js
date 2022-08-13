import { useState } from "react";
import { Text, View, Pressable, Alert, Vibration } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import { _delete } from "../../helpers/CRUD";
import { shortenText } from "../../helpers/textUtils";
import GestureRecognizer from 'react-native-swipe-gestures';
import Modal from "react-native-modal";

export function TaskBox({ navigation, item, update }) {
    const [showModal, setShowModal] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const { _title: title, _text: text, _date: date, _key: key } = item;
    const { year, month, day, hours, minutes } = date;

    return (
        <>
            <GestureRecognizer
                style={styles.taskBox}
                onSwipeRight={() => onSwipeRight()}
            >
                <Pressable
                    style={{ width: '100%' }}
                    onLongPress={() => setShowModal(!showModal)}
                    onPress={() => navigation.navigate('SingleTask', { item: item })}
                >
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{shortenText(text)}</Text>
                    <MaterialIcons
                        name="check-circle"
                        size={28}
                        color={isDone ? "#5c695f" : "#d8c7b7"}
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => setIsDone(!isDone)}
                    />
                </Pressable>
            </GestureRecognizer>
            <Modal
                isVisible={showModal}
                hasBackdrop={true}
                backdropColor='transperant'
                style={styles.modal}
                onBackdropPress={() => setShowModal(!showModal)}
                onBackButtonPress={() => setShowModal(!showModal)}
            >
                <View style={styles.modalBox}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <MaterialIcons
                        name="delete"
                        size={32}
                        color="#fbf5e9"
                        onPress={() => {
                            Alert.alert(
                                "Attention",
                                `Remove ' ${title} ' ?`,
                                [
                                    {
                                        text: "Cancel",
                                        style: "cancel"
                                    },
                                    {
                                        text: "Remove",
                                        onPress: () => {
                                            _delete(key);
                                            Vibration.vibrate();
                                            update();
                                            setShowModal(!showModal);
                                        },
                                        style: 'destructive'
                                    }
                                ]
                            );
                        }}
                    />
                    <Text style={styles.modalDate}>
                        Status : {isDone ? "Done !" : "Pending"}
                    </Text>
                    <Text style={styles.modalDate}>
                        {`Created on : ${day}/${month}/${year} , ${hours}:${minutes}`}
                    </Text>
                </View>
            </Modal>
        </>
    )

    function onSwipeRight() {
        _delete(key);
        Vibration.vibrate();
        update();
        setShowModal(!showModal);
    };
}