import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const addDetails = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a New Employee
        </Text>

        <TextInput
          style={{
            padding: 10,
            borderColor: "#d0d0d0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="Nairobi"
          placeholderTextColor={"black"}
        />
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Full Name(First and last Name)
        </Text>
        <TextInput
          style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="enter your name"
          placeholderTextColor={"black"}
          />
          </View>
          <View>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Employee Id
        </Text>
        <TextInput
          style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Employee id"
          placeholderTextColor={"black"}
          />
          </View>

          <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Designation
        </Text>
        <TextInput
          style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Designation"
          placeholderTextColor={"black"}
          />
        </View>

        <View>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Mobile Number
        </Text>
        <TextInput
          style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Mobile No"
          placeholderTextColor={"black"}
          />
          </View>

          <View style={{marginVertical:10}}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Date of Birth
        </Text>
        <TextInput
          style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Date of Birth"
          placeholderTextColor={"black"}
          />
          </View>

          <View>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Joining Date
        </Text>
        <TextInput
          style={{
              padding: 10,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Joining Date"
          placeholderTextColor={"black"}
          />
          </View>

      </View>
          <View style={{flex:'row'}}>
            <Text>Active Employee</Text>
            <Text>True</Text>
          </View>
    </ScrollView>
  );
};

export default addDetails;

const styles = StyleSheet.create({});
