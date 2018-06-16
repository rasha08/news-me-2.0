export const setKey = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));
export const getKey = key => JSON.parse(sessionStorage.getItem(key));
export const removeKey = key => sessionStorage.removeItem(key);