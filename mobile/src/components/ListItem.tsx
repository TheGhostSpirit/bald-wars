import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

type ListItemProps = {
  title: string;
  data: any;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    flex: 1,
    backgroundColor: '#4bcf9e',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10
  },
});

const ListItem = ({ title, data }: ListItemProps) => (
  <View style={styles.container}>
    <Text>{data.name}</Text>
    <Text>{JSON.stringify(data)}</Text>
    <Button
      onPress={() => 12}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  </View>
);

export default ListItem;
