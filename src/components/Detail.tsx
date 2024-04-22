import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  route: any;
};

const Detail = (props: Props) => {

  const avg = props.route.params.item.rating.average;

  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>{props.route.params.item.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${props.route.params.item.image}` }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.detailcontainer}>
        <Text style={styles.detail}>
          Price - {props.route.params.item.price}
        </Text>
        <Text style={styles.detail}>Rating - {avg.toFixed(1)}</Text>
        <Text style={styles.detail}>
          Reviews - {props.route.params.item.rating.reviews}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F7C566",
  },
  titlecontainer: {
    flex: 1.5,
    justifyContent: "center",
    backgroundColor: '#DC6B19',
  },
  title: {
    padding: 20,
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontStyle:'italic',
    fontWeight: "bold",
  },
  imageContainer: {
    flex: 3,
    marginVertical: 5,
    marginHorizontal: 5,
    // borderColor: '#2a4944',
    // borderWidth: 1,
    // backgroundColor: '#d2f7f1',
  },
  imageStyle: {
    width: 150,
    height: 200,
    padding:5,
    overflow:'visible',
    alignSelf: "center",
  },
  detailcontainer: {
    flex: 3,
    justifyContent: "center",
    backgroundColor: '#FFF8DC',
  },
  detail: {
    padding: 10,
    fontSize: 23,
    color: '#DC6B19',
    justifyContent: 'space-between',
    textAlign:'center',
  },
});

export default Detail;
