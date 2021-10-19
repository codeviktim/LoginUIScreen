import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 300 }}
        source={require("./assets/react.png")}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>React Native</Text>
      <Text
        style={{
          fontSize: 16,
          color: "gray",
          textAlign: "center",
          marginHorizontal: 20,
        }}
      >
        A beautiful login and signup user interface by codeviktim
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Signin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            background: "#fff",
            borderWidth: 1,
            borderColor: "#61dbfb",
            marginHorizontal: 2,
            padding: 10,
            width: 150,
            borderRadius: 30,
          }}
        >
          <Text style={{ textAlign: "center", color: "#0d47a1", fontSize: 18 }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 16 }}> or via social media</Text>

      <View style={{ flexDirection: "row", marginTop: 20}}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#3f51b5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontweight: "bold", color: "#fff" }}>
            f
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#f44336",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontweight: "bold", color: "#fff" }}>
            G
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40 / 2,
            backgroundColor: "#1565c0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontweight: "bold", color: "#fff" }}>
            In
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: 'row',
    margin: 20,
    paddingVertical:20
  },
  button: {
    backgroundColor: "#61dbfb",
    padding: 10,
    width: 150,
    borderRadius: 30,
    marginHorizontal:2
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize : 18
  }
});
