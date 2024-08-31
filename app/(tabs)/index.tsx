import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Product = {
  id: string;
  name: string;
  image: string;
};

const products: Product[] = [
  { id: '1', name: 'Sản phẩm 1', image: 'https://placekitten.com/200/200' },
  { id: '2', name: 'Sản phẩm 2', image: 'https://placekitten.com/201/201' },
  { id: '3', name: 'Sản phẩm 3', image: 'https://placekitten.com/202/202' },
  { id: '4', name: 'Sản phẩm 4', image: 'https://placekitten.com/203/203' },
  { id: '5', name: 'Sản phẩm 5', image: 'https://placekitten.com/204/204' },
];

export default function App() {
  const [numColumns, setNumColumns] = useState(2);
  const [searchText, setSearchText] = useState('');
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const isLandscape = width > height;
    setNumColumns(isLandscape ? 3 : 2);
  }, [width, height]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Image 
        source={{ uri: item.image }} 
        style={[styles.image, { width: width / numColumns - 30, height: width / numColumns - 30 }]} 
      />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar 
        backgroundColor="#f4511e"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <Text style={styles.header}>Danh sách sản phẩm</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm sản phẩm..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Nút ví dụ</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#f4511e',
    color: Platform.OS === 'ios' ? '#000' : '#fff',
  },
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  item: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
  },
  itemText: {
    marginTop: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f4511e',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
