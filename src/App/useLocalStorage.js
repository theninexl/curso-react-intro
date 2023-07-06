import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item,setItem] = React.useState(initialValue);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);

    console.log('item: '+item);
    console.log('loading: '+loading);
    console.log('error: '+error)

    React.useEffect(()=> {
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }          
          
          setLoading(false);
  
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 1500)
    },[]);
    

    const saveItem = (newItem) => {
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    }

    
    return {
      item,
      saveItem,
      loading,
      error};
  }

export { useLocalStorage }