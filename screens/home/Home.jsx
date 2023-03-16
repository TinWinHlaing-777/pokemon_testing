import { View, TextInput, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import CardLists from "../../components/card/CardLists";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.homeContainer}>
        <TextInput
          style={[styles.searchInput, styles.nameSearch]}
          placeholder="Name"
        />
        <View style={styles.categorizeContainer}>
          <TextInput
            placeholder="Type"
            style={[styles.searchInput, styles.multipleSearch]}
          />
          <TextInput
            placeholder="Rarity"
            style={[styles.searchInput, styles.multipleSearch]}
          />
          <TextInput
            placeholder="Set"
            style={[styles.searchInput, styles.multipleSearch]}
          />
        </View>
        <CardLists />
      </SafeAreaView>
      <View>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    flex: 1,
  },
  nameSearch: {
    width: "90%",
  },
  multipleSearch: {
    width: "27%",
    marginLeft: 10,
    marginRight: 10,
  },
  searchInput: {
    width: "auto",
    alignSelf: "center",
    shadowColor: "#B3B6B7",
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    marginTop: 20,
    height: 35,
    textAlign: "center",
    borderRadius: 100,
  },
  categorizeContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
});
