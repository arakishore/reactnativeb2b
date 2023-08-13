import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, SafeAreaView } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);

    // Your search logic goes here
    // For example, fetch data from an API based on the search query
    // and update the searchResults state with the filtered data
    // For demonstration purposes, we'll just filter an array of data.
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  // Dummy data for demonstration purposes
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Another Item' },
    { id: '4', title: 'Sample Item' },
    // Add more data here...
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 16 }}>
        
      <TextInput
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // Add additional FlatList props if needed (e.g., numColumns, ListEmptyComponent, etc.)
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
