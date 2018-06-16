export const setKey = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getKey = key => JSON.parse(localStorage.getItem(key));
export const removeKey = key => localStorage.removeItem(key);