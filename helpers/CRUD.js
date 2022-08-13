var ls = require('react-native-local-storage');

///////////////////////////////      CREATE      ///////////////////////////////

export async function _create(key, value) {
    ls.save(key, JSON.stringify(value));
}

///////////////////////////////      READ      ///////////////////////////////

export async function _readAll() {
    let result = [];
    let keys = (await ls.getAllKeys().then(res => res))

    for (let key of keys) {
        let data = (await ls.get(key).then(res => res))
        result.push(JSON.parse(data));
    }
    return result;
}

///////////////////////////////      UPDATE      ///////////////////////////////

export async function _update(key, value) {
    await ls.merge(key, value)
    .then(() => alert('a'))
    .catch((err) => console.log(err))
}

///////////////////////////////      DELETE      ///////////////////////////////

export async function _delete(key) {
    await ls.remove(key);
}

export async function _deleteAll() {
    await ls.clear();
}