import * as FileSystem from 'expo-file-system';

///////////////////////////////      CREATE      ///////////////////////////////

export async function _create(key, value) {
    await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + `${key}.txt`, JSON.stringify(value));
}

///////////////////////////////      READ      ///////////////////////////////

export async function _readAll() {
    let result = [];
    let keys = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);

    for (let key of keys) {
        await FileSystem.readAsStringAsync(FileSystem.documentDirectory + key)
            .then(res => {
                result.push(JSON.parse(res));
            })
            .catch(() => { });
    }

    return result;
}

///////////////////////////////      UPDATE      ///////////////////////////////

export async function _update(key, value, newText) {
    let today = new Date();
    value = {
        ...value,
        _text: newText,
        _date: {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate(),
            hours: today.getHours(),
            minutes: today.getMinutes()
        }
    };
    await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + `${key}.txt`, JSON.stringify(value));
}

///////////////////////////////      DELETE      ///////////////////////////////

export async function _delete(key) {
    await FileSystem.deleteAsync(FileSystem.documentDirectory + `${key}.txt`);
}

export async function _deleteAll() {
    let keys = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);

    for (let key of keys) {
        await FileSystem.deleteAsync(FileSystem.documentDirectory + key);
    }
}