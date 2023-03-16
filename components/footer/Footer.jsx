import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Footer = () => {
  return (
    <ScrollView style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerBtn}>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="black"
          style={styles.footerIcon}
        />
        <Text style={styles.footerText}>View Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    position: "relative",
    right: 0,
    lefts: 0,
    bottom: 0,
    flex: 1,
  },
  footerBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#0275d8",
    width: "30%",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  footerText: {
    color: "#fff",
  },
  footerIcon: {
    color: "#fff",
  },
});
