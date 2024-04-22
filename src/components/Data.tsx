/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, FlatList, Text, View } from 'react-native';
import axios from 'axios';

type Beer = {
  id: string;
  price: number;
  name: string;
  image: string;
  average: number;
  reviews: number;
};

type Props = {
  navigation: any;
}

const Data = (props: Props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Beer[]>([]);

  const fetchDataFromApi = () => {
    try {
      const baseURL = 'https://api.sampleapis.com/beers/ale';
      axios.get(`${baseURL}`).then(response => setData(response.data));
      setLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);


  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Data List</Text>
          </View>
          <View style={styles.dataContainer}>
            <FlatList
              data={data}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <Text style={styles.dataList} onPress={() => props.navigation.navigate('Item Detail Screen', { item })}>
                  {`\u2023 ${item.name}`}
                </Text>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
  },
  titlecontainer: {
    flex: 1,
    backgroundColor: '#DC6B19',
  },
  title: { 
    padding: 20,
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  dataContainer: {
    flex: 9,
    backgroundColor: '#F7C566',
  },
  dataList: {
    fontSize: 20,
    color: '#DC6B19',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#FFF8DC',
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Data;
