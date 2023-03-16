import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View, Text } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.loginCard}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.authCardTitle}>Login</Text>
        <TextInput
          style={styles.authInputField}
          keyboardType="email-address"
          placeholder="Email"
        />
        <TextInput
          style={styles.authInputField}
          keyboardType="visible-password"
          placeholder="Password"
        />
        <TouchableOpacity>
          <Text style={styles.forgetPasswordText}>Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#e9ecee",
  },
  loginCard: {
    backgroundColor: "#fff",
    width: "80%",
    height: "auto",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#B3B6B7",
    shadowOpacity: 0.5,
  },
  logoImage: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 50,
    height: 50,
    marginBottom: -15,
  },
  authCardTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    margin: 20,
  },
  authInputField: {
    borderWidth: 2,
    borderColor: "#808B96",
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  forgetPasswordText: {
    alignSelf: "flex-start",
    marginBottom: 15,
    color: "#85929E",
  },
  loginBtn: {
    backgroundColor: "#F4D03F",
    width: "30%",
    height: "auto",
    borderRadius: 5,
    shadowColor: "#f4d03fb2",
    shadowOpacity: 0.5,
  },
  loginText: {
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: "#566573",
  },
});
