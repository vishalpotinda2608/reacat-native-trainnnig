import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { User } from "../../models/User.model";

const Register = () => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
  });
  const [temp, setTemp] = useState<User[]>([]);

  const registerHandler = () => {
    console.log(user);
    setTemp((prev) => [...prev, user]);
    console.log(temp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Register here</Text>
      <View>
        <TextInput
          style={styles.textbox}
          value={user.firstName}
          onChangeText={(ev) => {
            setUser({
              ...user,
              firstName: ev,
            });
          }}
          placeholder="First Name"
        />
        <TextInput
          style={styles.textbox}
          value={user.lastName}
          onChangeText={(ev) => {
            setUser({ ...user, lastName: ev });
          }}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.textbox}
          value={user.email}
          onChangeText={(ev) => {
            setUser({ ...user, email: ev });
          }}
          placeholder="Email"
        />
        <TextInput
          style={styles.textbox}
          value={user.password}
          secureTextEntry={true}
          onChangeText={(ev) => {
            setUser({ ...user, password: ev });
          }}
          placeholder="Enter password"
        />
        <TextInput
          style={styles.textbox}
          value={user.mobileNo}
          onChangeText={(ev) => {
            setUser({ ...user, mobileNo: ev });
          }}
          placeholder="Mobile No"
        />
        <View style={styles.button}>
          <Button title="Login" onPress={registerHandler} />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#B388FF",
    display: "flex",
    flexDirection: "column",
    color: "white",
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 24,
  },
  button: {
    marginTop: 6,
    borderRadius: 10,
  },
  textbox: {
    borderRadius: 10,
    padding: 10,
    lineHeight: 40,
    fontSize: 18,
    backgroundColor: "#ECEFF1",
    margin: 3,
  },
});
