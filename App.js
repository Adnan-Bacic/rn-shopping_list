import React, { useState,  } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

import { v4 as uuidv4 } from 'uuid';

const App = () => {

  //state
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: 'Milk'
    },
    {
      id: uuidv4(),
      text: 'Eggs'
    },
    {
      id: uuidv4(),
      text: 'Bread'
    },
    {
      id: uuidv4(),
      text: 'Juice'
    },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }])
    } else {
      setItems(prevItems => {
        return [{id: uuidv4(), text: text}, ...prevItems];
      });
    }
  }

  return(
    <View style={styles.container}>
      <Header title='Shopping list'></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList data={items} renderItem={({ item }) => 
        <ListItem item={item} deleteItem={deleteItem}></ListItem>
      }></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

export default App;