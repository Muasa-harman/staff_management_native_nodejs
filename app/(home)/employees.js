import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";

const employees = () => {
  const [employees, setEmployees] = useState([2]);
  const [input, setInput] = useState("");

  const router = useRouter();
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    // fetchEmployeeData();
  }, []);
  console.log(employees);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <Ionicons
          style={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            height: 40,
            borderRadius: 4,
            // flex: 1,
          }}
        >
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            style={{ flex: 1 }}
            placeholder="search"
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          {employees.length > 0 && (
            <View>
              <Pressable>
                <AntDesign name="pluscircle" size={24} color="black" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>
      <Pressable>
        <Pressable onPress={() => router.push("/(home)/addDetails")}>
          <AntDesign name="pluscircle" size={24} color="#9c4f72" />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({});
