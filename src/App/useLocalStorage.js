import React from 'react';

export function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItm;
    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItm = initialValue;
    }
    else {
        parsedItm = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItm);

    const saveItems = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return [item, saveItems];
}