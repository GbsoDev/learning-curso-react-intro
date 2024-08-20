import React from 'react';

export function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItm;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                }
                else {
                    parsedItm = JSON.parse(localStorageItem);
                    setItem(parsedItm);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }, 1000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }


    return { item, saveItem, loading, error };
}