const getStorage = (name) => {
    const data = localStorage.getItem(name);
    const dataObj = JSON.parse(data);
    return dataObj;
}

const saveStorage = (name, data) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem(name, dataString);
    return true;
}

const removeStorage = (name) => {
    localStorage.removeItem(name);
    return true;
}

export { getStorage, saveStorage, removeStorage };