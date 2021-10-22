import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Characters = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.70:3000/api/characters')
    .then(res => res.json())
    .then(res => setCharacters(res));
  });

  const renderItem = ({ item }) => (
    <ListItem title={item} data={characters} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Characters;
