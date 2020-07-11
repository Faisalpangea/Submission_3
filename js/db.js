const dbPromised = idb.open('db_favorite', 1, upgradeDb => {
    const objectStore = upgradeDb.createObjectStore('favorite', {
        keyPath: 'id'
    });
    objectStore.createIndex('teamName', 'teamName', {
        unique: false
    });
});

function addFavorite(data) {
    dbPromised.then(db => {
        const tx = db.transaction('favorite', 'readwrite');
        const store = tx.objectStore('favorite');
        const dataSave = {
            id: data.id,
            name: data.name,
            crestUrl: data.crestUrl,
        };
        store.put(dataSave);
        return tx.complete;
    })
}


function getFavData() {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(db => {
                const tx = db.transaction('favorite', "readonly");
                const store = tx.objectStore('favorite');
                return store.getAll();
            })
            .then(data => {
                resolve(data);
            });
    });
}


function deleteFavorite(data) {
    dbPromised.then(db => {
        const tx = db.transaction('favorite', 'readwrite');
        const store = tx.objectStore('favorite');

        store.delete(data.id);
        return tx.complete;
    })
}


function getById(id) {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then(function (db) {
                const tx = db.transaction("favorite", "readonly");
                const store = tx.objectStore("favorite");
                return store.get(id);
            })
            .then(function (data) {
                resolve(data);
            });
    });
}

function checkData(id) {
    return new Promise(function (resolve, reject) {
        dbPromised.then(db => {
                const tx = db.transaction('favorite', "readonly");
                const store = tx.objectStore('favorite');
                return store.get(id);
            })
            .then(data => {
                if (data != undefined) resolve(true)
                else reject(false);
            });
    });
}
