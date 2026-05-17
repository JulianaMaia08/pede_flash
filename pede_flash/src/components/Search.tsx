import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';

export function SearchPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
    },
    title: {
        color: '#FF5A1F',
        fontSize: 28,
        fontWeight: '700',
    },
});