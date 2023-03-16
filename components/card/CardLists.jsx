import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  Pressable,
} from "react-native";
import React from "react";

const imageLists = [
  {
    imageUrl: require("../../assets/sample_1.png"),
    title: "Pokemon",
    type: "raity",
    price: "$2.49",
    left_items: "3 left",
  },
  {
    imageUrl: require("../../assets/sample_2.png"),
    title: "Pokemon",
    type: "raity",
    price: "$2.49",
    left_items: "3 left",
  },
  {
    imageUrl: require("../../assets/sample_3.png"),
    title: "Pokemon",
    type: "raity",
    price: "$2.49",
    left_items: "3 left",
  },
  {
    imageUrl: require("../../assets/sample_4.png"),
    title: "Pokemon",
    type: "raity",
    price: "$2.49",
    left_items: "3 left",
  },
  {
    imageUrl: require("../../assets/sample_5.png"),
    title: "Pokemon",
    type: "raity",
    price: "$2.49",
    left_items: "3 left",
  },
];
const CardLists = (props) => {
  const { onPress, title = "Select Card" } = props;

  return (
    <SafeAreaView>
      {imageLists.map((list, index) => {
        return (
          <View style={styles.cardContainer} key={index}>
            <Image source={list.imageUrl} style={styles.cardImage} />
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>{list.title}</Text>
              <Text style={styles.cardSubtitle}>{list.type}</Text>
              <View style={styles.nestedData}>
                <Text style={styles.nestedText}>{list.price}</Text>
                <Text style={styles.nestedText}>{list.left_items}</Text>
              </View>
            </View>
            <Pressable style={styles.selectBtn} onPress={onPress}>
              <Text style={styles.btnText}>{title}</Text>
            </Pressable>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default CardLists;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    resizeMode: "contain",
    width: 180,
    height: 400,
    marginTop: -40,
    zIndex: 1,
  },
  cardDetails: {
    backgroundColor: "#ffffff",
    width: 250,
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 50,
    marginTop: -120,
    paddingBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardSubtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "#3498DB",
  },
  nestedData: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  nestedText: {
    margin: 10,
    fontSize: 20,
    color: "#566573",
  },

  selectBtn: {
    marginTop: -16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#F4D03F",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#000",
  },
});
